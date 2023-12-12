import useTableAdd from '@/hooks/useTableAdd';
import useTableUpdate from '@/hooks/useTableUpdate';
import { permissionServiceAdd, permissionServiceUpdate } from '@/services/auth/permissionService';
import { resourceServicePage } from '@/services/auth/resourceService';
import { msgLogServicePage } from '@/services/shadow/msgLogService';
import { deviceServiceGet } from '@/services/thing/deviceService';
import { RESOURCE_TYPE_API } from '@/utils/const';
import { dateStrToTimestamp, timestampToDateStr } from '@/utils/date';
import {
  ProFormSelect,
  ProFormInstance,
  ModalForm,
  ProColumns,
  ProTable,
  ActionType,
  ProDescriptions,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';


const FORMITEM_LAYOUT = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

type AddFuncType = typeof permissionServiceAdd;
type UpdateFuncType = typeof permissionServiceUpdate;

const DeviceStatusPagePropertyDetail: React.FC<{
  deviceId : string,
  record: API.protoDeviceProperty;
}> = ({ deviceId, record}) => {
  const [deviceInfo, setDeviceInfo] = useState<API.protoDevice>({});
  const [megerInfo, setMegerInfo] = useState<any>({});
  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    queryDevice()

    const m : any = {...record}
    m.device_name = deviceInfo.name 
    setMegerInfo(m)

    setVisible(true);
  };
  const onClose = () => setVisible(false);
  const pageRef = useRef<ActionType>();
  const formRef = useRef<ProFormInstance>();

  const queryPage = async (params: any): Promise<{ data?: API.protoProductModel[]; total?: number }> => {
   
    const param : API.protoMsgLogPageReq = {
        page_index: params.current,
        page_size: params.pageSize,
        log_types: ["property"],
        dir: "up",
        msg_id: params.msg_id,
        start_time: params.start_time,
        end_time: params.end_time,
        code: record.code,
    };
    const res = await msgLogServicePage(param);
    if (res.code !== 0) {
      return {
        data: [],
        total: 0,
      };
    }
    return {
      data: res.items,
      total: res.total,
    };
  };

  const queryDevice = async () => {
    const param : API.protoDeviceGetReq = {
        id: deviceId,
    };
    const res = await deviceServiceGet(param);
    if (res.code !== 0) {
      setDeviceInfo(res.item!)
    };
  };

  const getMsgObject = (record: any) => {
    try {
      return JSON.parse(record.content!);
    } catch (e) {
      console.error(e);
      message.error('JSON 解析错误');
    }
  };


  const columns: ProColumns<API.protoResource>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '时间',
      dataIndex: 'create_time',
      valueType:'dateTimeRange',
      render: (_: any, entity: API.protoMsgLog) => {
        return timestampToDateStr(Number(entity.create_time), 'YYYY-MM-DD HH:mm:ss.SSS');
      },
      width: 180,
      search: {
        transform: (value) => ({ 
          start_time: value[0] === undefined?undefined:dateStrToTimestamp(value[0]),
          end_time: value[1] === undefined?undefined:dateStrToTimestamp(value[1]),
        }),
      },
    },
    {
      title: '消息id',
      dataIndex: 'msg_id',
      width: 260,
    },
    {
      title: '属性值',
      dataIndex: 'content',
      search:false,
      ellipsis:true,
      render: (_: any, entity: API.protoMsgLog) => {
        const params = getMsgObject(entity).params;
        return JSON.stringify(params);
      },
    },
  ];

  return (
    <ModalForm
      width={1200}
      title="属性详细"
      trigger={
        <Button
          type='link'
          onClick={() => {
            onOpen();
          }}
        >
        详细
        </Button>
      }
      open={visible}
      modalProps={{
        onCancel: () => {
          onClose();
        },
      }}
      {...FORMITEM_LAYOUT}
      layout={LAYOUT_TYPE_HORIZONTAL}
      submitter={false}
    >

  <ProDescriptions
      dataSource={megerInfo}
      columns={[
        {
          title: '设备名称',
          dataIndex: 'device_name',
        },
        {
          title: '属性名称',
          dataIndex: 'name',
        },
        {
          title: '属性标识',
          dataIndex: 'code',
        },
        {
          title: '当前值',
          dataIndex: 'value',
        },
        {
          title: '更新时间',
          key: 'date',
          dataIndex: 'update_time',
          valueType: 'date',
          render: (_, entity: any) => timestampToDateStr(Number(entity.update_time), 'YYYY-MM-DD HH:mm:ss.SSS'),
        },
      ]}
    >
    </ProDescriptions>

    <ProTable
        options={false}
        rowKey="msg_id"
        columns={columns}
        actionRef={pageRef}
        formRef={formRef}
        bordered
        request={queryPage}
        pagination={{
          pageSize: 10,
        }}
        rowSelection={false}
        search={{
          span: 10,
          labelWidth: 'auto',
        }}
      />
      
    </ModalForm>
  );
};

export default DeviceStatusPagePropertyDetail;
