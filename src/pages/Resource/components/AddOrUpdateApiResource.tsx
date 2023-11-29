
import useTableAdd from '@/hooks/useTableAdd';
import useTableUpdate from '@/hooks/useTableUpdate';
import { resourceServiceAdd, resourceServiceUpdate } from '@/services/auth/resourceService';
import { RESOURCE_TYPE_API } from '@/utils/const';
import { ProFormInstance,ModalForm, ProFormText,ActionType } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';

const FORMITEM_LAYOUT = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

type AddFuncType = typeof resourceServiceAdd;
type UpdateFuncType = typeof resourceServiceUpdate;

const AddOrUpdateApiResource: React.FC<{
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
      let code = -1  
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
          type:RESOURCE_TYPE_API,
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
        editFormRef.current?.setFieldsValue(record);
      }, [editFlag, record]);
      
    return (
        <ModalForm
        initialValues={record}
        width={550}
        formRef={editFormRef}
        title={flag === 'update' ? '编辑接口信息' : '添加接口'}
        trigger={
          <Button
            type={flag === 'update' ? 'link' : 'primary'}
            onClick={() => {
              setEditFlag(true);
              onOpen();
            }}
          >
            {flag === 'update' ? '编辑' : '添加接口'}
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
        <ProFormText
            name="content"
            width="md"
            label="资源内容"
            placeholder="请输入资源内容"
            rules={[
            {
                required: true,
            },
            ]}
        />
        </ModalForm>
    );
};

export default AddOrUpdateApiResource;
