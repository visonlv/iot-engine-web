import { Button, Card,  Tabs, Upload, message } from 'antd';
import { PageContainer,ProDescriptions,ActionType,ModalForm } from '@ant-design/pro-components';
import { history } from '@@/core/history';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from '@umijs/max';
import { productServiceGet, productServiceGetModel, productServiceUpdateModel } from '@/services/thing/productService';
import { THING_PRODUCT_PROTOCOL, THING_PRODUCT_TRANSFORM, THING_PRODUCT_TYPE, convert2ValueEnum } from '@/utils/const';
import { timestampToDateStr } from '@/utils/date';
import { getModelTabId, setModelTabId } from '@/utils/store';
import { downloadFunction } from '@/utils/utils';
import { DownloadOutlined, EyeOutlined, ImportOutlined } from '@ant-design/icons';
import ReactJson from 'react-json-view';
import { deviceServiceGet } from '@/services/thing/deviceService';
import ModelPropertyPage from '@/pages/Product/detail/components/ModelPropertyPage';
import ModelServicePage from '@/pages/Product/detail/components/ModelServicePage';
import ModelEventPage from '@/pages/Product/detail/components/ModelEventPage';
import ModelTabPage from './components/ModelTabPage';
import DeviceBaseTabPage from './components/DeviceBaseTabPage';
import DeviceStatusPage from './components/DeviceStatusPage';


const { TabPane } = Tabs;
const IndexPage: React.FC = () => {
  const params = useParams() as { id: string };
  const [productInfo, setProductInfo] = useState<API.protoProduct>({});
  const [deviceInfo, setDeviceInfo] = useState<API.protoDevice>({ name: '', id:params.id });
  const [mergeInfo, setMergeInfo] = useState<any>({} as any);
  const pagePropertyRef = useRef<ActionType>();
  const pageEventRef = useRef<ActionType>();
  const pageServiceRef = useRef<ActionType>();

  const queryDeviceAndProduct = async () => {
    const body: API.protoDeviceGetReq = {
        id: params.id,
    };
    const res = await deviceServiceGet(body);
    if (res.code !== 0) {
        return
    }

    const body1: API.protoProductGetReq = {
      pk: res.item!.pk,
    };
    const res1 = await productServiceGet(body1);
    if (res1.code !== 0) {
        return
    }
    setDeviceInfo(res.item!)
    setProductInfo(res1.item!)

    const info = {...res.item!}  as any
    info.product_name = res1.item!.name

    console.log("info", info)
    setMergeInfo(info)
  };

  useEffect(() => {
    queryDeviceAndProduct();
  }, []);

  

  return (
    <PageContainer
      title={mergeInfo.name}
      onBack={() => history.back()}
    >
    <ProDescriptions
      dataSource={mergeInfo}
      columns={[
        {
          title: '产品名称',
          dataIndex: 'product_name',
        },
        {
          title: '产品KEY',
          dataIndex: 'pk',
          ellipsis: true,
          copyable: true,
        },
      ]}
    >
    </ProDescriptions>
      <Card>
        <Tabs  
          defaultActiveKey='1'
          onChange={(index)=>{
          }}
        >
        <TabPane tab="基础信息" key="1">
            <DeviceBaseTabPage deviceInfo={deviceInfo} />,
        </TabPane>
        <TabPane tab="设备状态" key="2">
            <DeviceStatusPage deviceId={deviceInfo.id!} />,
        </TabPane>
        <TabPane tab="物模型" key="3">
            <ModelTabPage productInfo={productInfo} />,
        </TabPane>
        
        <TabPane tab="设备调试" key="4">
        </TabPane>
        <TabPane tab="设备日志" key="5">
        </TabPane>
        <TabPane tab="云端日志" key="6">
        </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
};

export default IndexPage;
