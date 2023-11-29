
import useTableAdd from '@/hooks/useTableAdd';
import useTableUpdate from '@/hooks/useTableUpdate';
import { resourceServiceAdd, resourceServiceUpdate } from '@/services/auth/resourceService';
import { RESOURCE_TYPE_MENU } from '@/utils/const';
import { ProFormInstance,ModalForm, ProFormText,ProFormTextArea,ActionType } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useEffect, useRef, useState } from 'react';

const FORMITEM_LAYOUT = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

type AddFuncType = typeof resourceServiceAdd;
type UpdateFuncType = typeof resourceServiceUpdate;

const AddOrUpdateMenuResource: React.FC<{
    flag: string;
    record?: API.authResource;
    pageRef: React.MutableRefObject<ActionType | undefined>;
  }> = ({ flag, record, pageRef}) => {
    const { addHandler } = useTableAdd();
    const { updateHandler } = useTableUpdate();
    const [editFlag, setEditFlag] = useState(false);
    const [visible, setVisible] = useState(false);
    const editFormRef = useRef<ProFormInstance>();
    const onOpen = () => setVisible(true);
    const onClose = () => setVisible(false);

    const formSubmit = async (values: any) => {
      if (flag === "detail") {
        onClose();
        editFormRef.current?.resetFields();
        return
      }

      let code = -1  
      try {
        const obj = JSON.parse(values.content);
        if (typeof obj !== 'object') {
          message.error("资源内容格式错误")
          return
        }
      } catch (e) {
        message.error("资源内容格式错误")
        return
      }
      if (flag === 'update') {
        const updateReq : API.authUpdateResourceReq = {
          content: values.content,
          name: values.name,
          id: record?.id as string,
        } 
        const res = await updateHandler<UpdateFuncType, API.authUpdateResourceReq>(resourceServiceUpdate, pageRef, updateReq);
        code = res.code
      } else {
        const addReq : API.authAddResourceReq = {
          content: values.content,
          name: values.name,
          type: RESOURCE_TYPE_MENU,
        } 
        const res = await addHandler<AddFuncType, API.authAddResourceReq>(resourceServiceAdd, pageRef, addReq);
        code = res.code
      }
      if (code === 0) {
        onClose();
        editFormRef.current?.resetFields();
      }
    };

    useEffect(() => {
      if (record !== undefined) {
        const content = JSON.stringify(JSON.parse(record?.content as string), null,2)
        editFormRef.current?.setFieldValue("name",record?.name);
        editFormRef.current?.setFieldValue("content",content);
      }
      }, [editFlag, record]);
      
    return (
        <ModalForm
        initialValues={
          { 
            name:record === undefined? "": record.name,
            content:record === undefined? "": JSON.stringify(JSON.parse(record?.content as string), null,2)
          }
        }
        width={550}
        formRef={editFormRef}
        title={flag === 'update' ? '编辑菜单信息' : flag === 'detail' ? '菜单详情': '添加菜单'}
        trigger={
          <Button
            type={flag === 'update' || flag === 'detail' ? 'link' : 'primary'}
            onClick={() => {
              setEditFlag(true);
              onOpen();
            }}
          >
            {flag === 'update' ? '编辑' : flag === 'detail' ? '查看详情':'添加菜单'}
          </Button>
        }
        open={visible}
        autoFocusFirstInput
        modalProps={{
          onCancel: onClose,
        }}
        submitTimeout={2000}
        {...FORMITEM_LAYOUT}
        layout={LAYOUT_TYPE_HORIZONTAL}
        onFinish={formSubmit}
      >
        <ProFormText
            bordered
            readonly={flag === 'detail'}
            name="name"
            width="md"
            label="资源名称"
            placeholder="请输入资源名称"
            rules={[
            {
                required: true,
            },
            ]}
        />
        <ProFormTextArea  
            bordered
            readonly={flag === 'detail'}
            name="content"
            width="md"
            label="资源内容"
            placeholder="请输入资源内容"
            fieldProps={{
              autoSize: true,
            }}
            rules={[
            {
              required: true,
            },
            ]}
        />
        </ModalForm>
    );
};

export default AddOrUpdateMenuResource;
