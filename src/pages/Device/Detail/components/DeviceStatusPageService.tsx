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

const DeviceStatusPageService: React.FC<{
  deviceId : string,
}> = ({ deviceId}) => {
  const [deviceInfo, setDeviceInfo] = useState<API.protoDevice>({});
  const pageRef = useRef<ActionType>();

  const queryPage = async (params: any): Promise<{ data?: API.protoProductModel[]; total?: number }> => {
    const param : API.protoMsgLogPageReq = {
        page_index: params.current,
        page_size: params.pageSize,
        log_types: ["service"],
        dir: "up",
        msg_id: params.msg_id,
        context_id: params.context_id,
        code: params.code,
        start_time: params.start_time,
        end_time: params.end_time,
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
      title: '上下文id',
      dataIndex: 'context_id',
      width: 260,
    },
    {
      title: '服务代码',
      dataIndex: 'code',
      width: 100,
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
    
    <ProTable
        options={false}
        rowKey="msg_id"
        columns={columns}
        actionRef={pageRef}
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
      
  );
};

export default DeviceStatusPageService;
