import { Card,  Tabs } from 'antd';
import { PageContainer,ProDescriptions } from '@ant-design/pro-components';
import { history } from '@@/core/history';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from '@umijs/max';
import { productServiceGet } from '@/services/thing/productService';
import { THING_PRODUCT_PROTOCOL, THING_PRODUCT_TRANSFORM, THING_PRODUCT_TYPE, convert2ValueEnum } from '@/utils/const';
import { timestampToDateStr } from '@/utils/date';
import ModelPropertyPage from './components/ModelPropertyPage';
import ModelServicePage from './components/ModelServicePage';
import ModelEventPage from './components/ModelEventPage';

const { TabPane } = Tabs;
const IndexPage: React.FC = () => {
  const [productInfo, setProductInfo] = useState<API.protoProduct>({ name: '' });
  const params = useParams() as { id: string };
  const transformRef = useRef<{ [key: string]: { text: string } }>(
    convert2ValueEnum(THING_PRODUCT_TRANSFORM),
  );
  const protocolRef = useRef<{ [key: string]: { text: string } }>(
    convert2ValueEnum(THING_PRODUCT_PROTOCOL),
  );
  const productTypeRef = useRef<{ [key: string]: { text: string } }>(
    convert2ValueEnum(THING_PRODUCT_TYPE),
  );

  const queryProduct = async (): Promise<API.protoProduct> => {
    const body: API.protoProductGetReq = {
      id: params.id,
    };
    const res = await productServiceGet(body);
    setProductInfo(res.item!)
    return res.item!;
  };


  useEffect(() => {
    queryProduct();
  }, []);

  return (
    <PageContainer
      title={productInfo.name}
      onBack={() => history.back()}
    >
    <ProDescriptions
      dataSource={productInfo}
      columns={[
        {
          title: '产品型号',
          dataIndex: 'model',
        },
        {
          title: '产品KEY',
          dataIndex: 'pk',
        },
        {
          title: '产品类型',
          key: 'state',
          dataIndex: 'type',
          valueType: 'select',
          valueEnum: productTypeRef.current,
        },
        {
          title: '传输类型',
          dataIndex: 'transform',
          valueType: 'select',
          valueEnum: transformRef.current,
        },
        {
          title: '协议',
          key: 'text',
          dataIndex: 'protocol',
          valueType: 'select',
          valueEnum: protocolRef.current,
        },
        {
          title: '创建时间',
          key: 'date',
          dataIndex: 'create_time',
          valueType: 'date',
          render: (_, entity: API.protoProduct) => timestampToDateStr(Number(entity.create_time), 'YYYY-MM-DD HH:mm:ss.SSS'),
        },
        {
          title: '描述',
          dataIndex: 'desc',
        },
        {
          title: '操作',
          valueType: 'option',
          render: () => [
            <a target="_blank" rel="noopener noreferrer" onClick={()=>{alert("")}} key="link">
              导入物模型
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="warning">
              导出物模型
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
              查看物模型
            </a>,
          ],
        },
      ]}
    >
    </ProDescriptions>
      <Card>
        <Tabs defaultActiveKey="3">
          <TabPane tab="属性"  key="1">
            <ModelPropertyPage productInfo={productInfo} key="ModelPropertyPage" />
          </TabPane>
          <TabPane tab="服务" key="2">
          <ModelServicePage productInfo={productInfo} key="ModelServicePage" />
          </TabPane>
          <TabPane tab="事件" key="3">
          <ModelEventPage productInfo={productInfo} key="ModelEventPage" />
          </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
};

export default IndexPage;
