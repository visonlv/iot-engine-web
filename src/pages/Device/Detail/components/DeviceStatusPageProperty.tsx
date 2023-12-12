import { CopyOutlined, DownloadOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { ActionType, ProColumns,ProForm,ProFormList } from '@ant-design/pro-components';
import { ProList } from '@ant-design/pro-components';
import { Alert, Button, Input, message, Modal, Tag } from 'antd';
import styles from './style.less';
import { productModelServiceDel, productModelServicePage } from '@/services/thing/productModelService';
import { useRef,useMemo, useState, useEffect } from 'react';
import { THING_DATA_TYPE, THING_DATA_TYPE_BOOL, THING_DATA_TYPE_FLOAT, THING_DATA_TYPE_INT, THING_EVENT_TYPE, THING_MODEL_TYPE_EVENT, THING_MODEL_TYPE_PROPERTY, THING_PROPERTY_MODE, convert2ValueEnum } from '@/utils/const';
import useTableDelete from '@/hooks/useTableDelete';
import { history } from '@@/core/history';
import { ModelProperty } from '@/utils/type';
import { deviceServiceProperties } from '@/services/thing/deviceService';
import { timestampToDateStr } from '@/utils/date';
import DeviceStatusPagePropertyDetail from './DeviceStatusPagePropertyDetail';

const DeviceStatusPageProperty: React.FC<{
  deviceId: string;
}> = ({deviceId}) => {
  const [propertysData, setPropertysData] = useState<any[]>([] as any[]);

  
const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
  'Ant Design Pro',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [<a key="delete">详情</a>],
  avatar:
    '/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>发布中</div>
      </div>
    </div>
  ),
}));

  const queryList = async (): Promise<any[]> => {
    const param : API.protoDevicePropertiesReq = {
        id: deviceId,
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
    queryList()
  }, []);

  return (
    <ProList<any>
      pagination={false}
      showActions="hover"
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
                <ClockCircleOutlined/><text style={{marginLeft:'5px'}}>更新时间:
                {timestampToDateStr(Number(entity.update_time), 'YYYY-MM-DD HH:mm:ss.SSS')} 
                </text>
              </div>
              </div>
        },
        },
        actions: {
          render(dom, entity, index, action, schema) {
            return <DeviceStatusPagePropertyDetail deviceId={deviceId} record={entity}></DeviceStatusPagePropertyDetail>
          },
        },
      }}
      dataSource={propertysData}
    />
  );
};

export default DeviceStatusPageProperty;