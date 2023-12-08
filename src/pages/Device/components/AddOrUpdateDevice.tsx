import useTableAdd from '@/hooks/useTableAdd';
import useTableUpdate from '@/hooks/useTableUpdate';
import { deviceServiceAdd, deviceServiceUpdate } from '@/services/thing/deviceService';
import {
  THING_PRODUCT_PROTOCOL,
  THING_PRODUCT_TRANSFORM,
  THING_PRODUCT_TYPE,
  convert2ValueEnum,
} from '@/utils/const';
import {
  ProFormInstance,
  ModalForm,
  ProFormText,
  ProFormSelect,
  ProFormTextArea,
  ActionType,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';

const FORMITEM_LAYOUT = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

type AddFuncType = typeof deviceServiceAdd;
type UpdateFuncType = typeof deviceServiceUpdate;

const AddOrUpdateDevice: React.FC<{
  flag: string;
  record?: API.protoDevice;
  pageRef: React.MutableRefObject<ActionType | undefined>;
  selectOptions: { value: string; label: string }[];
}> = ({ flag, record, pageRef,selectOptions }) => {
  const { addHandler } = useTableAdd();
  const { updateHandler } = useTableUpdate();
  const [editFlag, setEditFlag] = useState(false);
  const [visible, setVisible] = useState(false);
  const editFormRef = useRef<ProFormInstance>();
  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  const formSubmit = async (values: any) => {
    let code = -1;
    if (flag === 'update') {
      const updateReq: API.protoDeviceUpdateReq = {
        name: values.name,
        secret: values.secret,
        desc: values.desc,
        id: record?.id as string,
      };
      const res = await updateHandler<UpdateFuncType, API.protoDeviceUpdateReq>(
        deviceServiceUpdate,
        pageRef,
        updateReq,
      );
      code = res.code;
    } else {
      const addReq: API.protoDeviceAddReq = {
        pk: values.pk,
        name: values.name,
        sn: values.sn,
        secret: values.secret,
        desc: values.desc,
      };
      const res = await addHandler<AddFuncType, API.protoDeviceAddReq>(
        deviceServiceAdd,
        pageRef,
        addReq,
      );
      code = res.code;
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
      title={flag === 'update' ? '编辑设备信息' : '添加设备'}
      trigger={
        <Button
          type={flag === 'update' ? 'link' : 'primary'}
          onClick={() => {
            setEditFlag(true);
            onOpen();
          }}
        >
          {flag === 'update' ? '编辑' : '添加设备'}
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
        label="设备名称"
        placeholder="请输入设备名称"
        rules={[
          {
            required: true,
          },
        ]}
      />

      <ProFormText
        disabled={flag === 'update'}
        name="sn"
        width="md"
        label="设备sn"
        placeholder="请输入设备sn"
        rules={[
          {
            required: true,
          },
        ]}
      />

      <ProFormText
        width="md"
        name="secret"
        label="密钥"
        placeholder="请选择密钥"
        rules={[
          {
            required: true,
            message: '设备密钥是必填项！',
          },
        ]}
      />

      <ProFormSelect
        disabled={flag === 'update'}
        width="md"
        name="pk"
        label="产品"
        placeholder="请选择产品"
        rules={[
          {
            required: true,
            message: '产品是必填项！',
          },
        ]}
        valueEnum={convert2ValueEnum(selectOptions)}
      />

      <ProFormTextArea
        bordered
        name="desc"
        width="md"
        label="描述"
        placeholder="请输入描述"
        fieldProps={{
          autoSize: true,
        }}
      />
    </ModalForm>
  );
};

export default AddOrUpdateDevice;
