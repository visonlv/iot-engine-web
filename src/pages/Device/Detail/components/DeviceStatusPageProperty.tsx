import { ClockCircleOutlined } from '@ant-design/icons';
import { ActionType} from '@ant-design/pro-components';
import { ProList } from '@ant-design/pro-components';
import { Tag } from 'antd';
import { useRef, useState, useEffect } from 'react';
import { deviceServiceProperties } from '@/services/thing/deviceService';
import { timestampToDateStr } from '@/utils/date';
import DeviceStatusPagePropertyDetail from './DeviceStatusPagePropertyDetail';

const DeviceStatusPageProperty: React.FC<{
  activeKey:string;
  deviceInfo: API.protoDevice;
}> = ({activeKey,deviceInfo}) => {
  const actionRef = useRef<ActionType>();
  const [propertysData, setPropertysData] = useState<any[]>([] as any[]);
  const [timerId, setTimerId] = useState<any>(null);

  const queryList = async (): Promise<any[]> => {
    const param : API.protoDevicePropertiesReq = {
        id: deviceInfo.id,
    };
    const res = await deviceServiceProperties(param);
    if (res.code !== 0) {
      return [];
    }

    const newList = res.items!.map((value: any)=>{
      value.avatar = "/xingzhuang.svg"
      return value
    })

    setPropertysData(newList)
    return newList;
  };

  useEffect(() => {
    if (activeKey === '1') {
      queryList()
    }
  }, [activeKey]);

  useEffect(() => {
    const id:any = setInterval(() => {
      if (activeKey === '1') {
        queryList()
      }
    }, 5000);
    setTimerId(id);
    return () => {
      clearInterval(timerId); // 组件卸载时清除定时器
    };
  }, []);

  return (
    <ProList<any>
      actionRef={actionRef}
      pagination={false}
      rowSelection={false}
      grid={{ gutter: 16, column: 3,}}
      onItem={(record: any) => {
        return {
          onClick: () => {
            console.log(record);
          },
        };
      }}
      metas={{
        title: {dataIndex:"name"},
        subTitle: {
          render(dom, entity, index, action, schema) {
              return <Tag color="#5BD8A6">{entity.type}</Tag>
          },
        },
        type: {},
        avatar: {dataIndex:"avatar"},
        content: {
          render(dom, entity, index, action, schema) {
            return <div>
              <div style={{height:60,}}>
                <div style={{fontWeight:'bold'}}>{entity.value === ""?"-":entity.value}</div>
              </div>
              <div>
                <ClockCircleOutlined/><span style={{marginLeft:'5px'}}>更新时间:
                {timestampToDateStr(Number(entity.update_time), 'YYYY-MM-DD HH:mm:ss.SSS')} 
                </span>
              </div>
              </div>
        },
        },
        actions: {
          render(dom, entity, index, action, schema) {
            return <DeviceStatusPagePropertyDetail deviceInfo={deviceInfo} record={entity}></DeviceStatusPagePropertyDetail>
          },
        },
      }}
      dataSource={propertysData}
    />
  );
};

export default DeviceStatusPageProperty;