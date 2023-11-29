
import useTableAdd from '@/hooks/useTableAdd';
import useTableUpdate from '@/hooks/useTableUpdate';
import { permissionServiceAdd, permissionServiceUpdate } from '@/services/auth/permissionService';
import { resourceServicePage } from '@/services/auth/resourceService';
import {  RESOURCE_TYPE_RULE } from '@/utils/const';
import { ProFormSelect,ProFormInstance,ModalForm, ProColumns,ProTable,ActionType } from '@ant-design/pro-components';
import { Button, } from 'antd';
import { useEffect, useRef, useState } from 'react';

const FORMITEM_LAYOUT = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

type AddFuncType = typeof permissionServiceAdd;
type UpdateFuncType = typeof permissionServiceUpdate;

const AddOrUpdateRulePermission: React.FC<{
    flag: string;
    record?: API.authPermission;
    pageRef: React.MutableRefObject<ActionType | undefined>;
    selectAppOptions: { value: string; label: string }[];
    selectRoleOptions: { value: string; label: string }[];
  }> = ({ flag, record, pageRef, selectAppOptions, selectRoleOptions}) => {
    const { addHandler } = useTableAdd();
    const { updateHandler } = useTableUpdate();
    const [editFlag, setEditFlag] = useState(false);
    const [visible, setVisible] = useState(false);
    const editFormRef = useRef<ProFormInstance>();
    const subPageActionRef = useRef<ActionType>();
    const selectedList = useRef<string[]>([]);
    const onOpen = () => setVisible(true);
    const onClose = () => setVisible(false);

    const formSubmit = async (values: any) => {
      let code = -1  
      const resourceList =  selectedList.current.map((item : any) => {
        return {resource_id:item};
      });
      const resourceStr = JSON.stringify(resourceList)

      if (flag === 'update') {
        const updateReq : API.authPermissionUpdateReq = {
          id: record?.id as string,
          role_id: values.role_id,
          app_id: values.app_id,
          resources: resourceStr,
        } 
        const res = await updateHandler<UpdateFuncType, API.authPermissionUpdateReq>(permissionServiceUpdate, pageRef, updateReq);
        code = res.code
      } else {
        const addReq : API.authPermissionAddReq = {
          role_id: values.role_id,
          app_id: values.app_id,
          resource_type: RESOURCE_TYPE_RULE,
          resources: resourceStr,
        } 
        const res = await addHandler<AddFuncType, API.authPermissionAddReq>(permissionServiceAdd, pageRef, addReq);
        code = res.code
      }
      if (code === 0) {
        onClose();
        editFormRef.current?.resetFields();
      }
    };

      /**
   * 查询数据
   * */
  const queryPage = async (params: any,): Promise<{ data?: API.authPermission[]; total?: number }> => {
    const body:API.authResourcePageReq = {
      page_index:params.current,
      page_size:params.pageSize,
      type:RESOURCE_TYPE_RULE,
    };
    const res = await resourceServicePage(body);
    return {
      data: res.list,
      total: res.total,
    };
  };

  useEffect(() => {
      editFormRef.current?.setFieldsValue(record);
      if (record !== undefined) {
        const list = JSON.parse(record.resources as string)
        const ids:string[] =  list.map((item : any) => {
          return item.resource_id as string;
        });
        selectedList.current = ids
        console.log("selectedList.current,",selectedList.current)
      }
  }, [editFlag, record]);
    
  const columns: ProColumns<API.authResource>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: "规则名称",
      dataIndex: 'name',
    },
    {
      title: "规则类型",
      dataIndex: 'content',
    }
  ];

    return (
        <ModalForm
        width={550}
        formRef={editFormRef}
        title={flag === 'update' ? '编辑权限信息' : '添加规则权限'}
        trigger={
          <Button
            type={flag === 'update' ? 'link' : 'primary'}
            onClick={() => {
              setEditFlag(true);
              onOpen();
            }}
          >
            {flag === 'update' ? '编辑' : '添加规则权限'}
          </Button>
        }
        open={visible}
        autoFocusFirstInput
        modalProps={{
          onCancel: () => {
            onClose()
          },
        }}
        submitTimeout={2000}
        {...FORMITEM_LAYOUT}
        layout={LAYOUT_TYPE_HORIZONTAL}
        onFinish={formSubmit}
      >
      <ProFormSelect
            width="md"
            name="role_id"
            label="角色"
            placeholder="请选择角色"
            request={async () => selectRoleOptions}
            rules={[
            {
                required: true,
                message: '角色是必填项！',
            },
            ]}
        />
       <ProFormSelect
            width="md"
            name="app_id"
            label="应用"
            placeholder="请选择应用"
            request={async () => selectAppOptions}
            rules={[
              {
                  required: true,
                  message: '应用是必填项！',
              },
            ]}
        />
          <ProTable
            search={false}
            options={false}
            rowKey="id"
            columns={columns}
            actionRef={subPageActionRef}
            bordered
            request={queryPage}
            pagination={{
              pageSize: 10,
            }}
            rowSelection={{
              onChange: (row, selectedRows) => {
                const ids:string[] =  selectedRows.map((item : API.authResource) => {
                  return item.id as string;
                });
                selectedList.current = ids
              },
              preserveSelectedRowKeys:true,
              defaultSelectedRowKeys:selectedList.current,
            }}
          />
        </ModalForm>
    
    );
};

export default AddOrUpdateRulePermission;
