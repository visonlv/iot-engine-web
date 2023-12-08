import { CopyOutlined, DownloadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
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

const DeviceStatusPropertyPage: React.FC<{
  productInfo: API.protoProduct;
  deviceInfo: API.protoDevice;
  changeIndex:string;
}> = ({productInfo, deviceInfo, changeIndex}) => {
  const [propertysData, setPropertysData] = useState<ModelProperty[]>([] as ModelProperty[]);

  const getDefinition = (record: API.protoProductModel) => {
    try {
      return JSON.parse(record.model_def!);
    } catch (e) {
      console.error(e);
      message.error('JSON 解析错误');
    }
  };

  
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

  const queryPage = async (): Promise<{ data?: API.protoProductModel[]; total?: number }> => {
    const param : API.protoProductModelPageReq = {
        page_index: 1,
        page_size: 10000,
        name: "",
        code: "",
        type: THING_MODEL_TYPE_EVENT,
        product_id: productInfo?.id,
    };
    const res = await productModelServicePage(param);
    if (res.code !== 0) {
      return {
        data: [],
        total: 0,
      };
    }
    setPropertysData(res.items as any)
    return {
      data: res.items,
      total: res.total,
    };
  };

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '值',
      dataIndex: 'value',
      key: 'value',
     
    },
    {
      title: '更新时间',
      dataIndex: 'time',
      key: 'time',
     
    },
  ];

  useEffect(() => {
    queryPage()
  }, [productInfo, deviceInfo]);

  useMemo(() => {
  }, [changeIndex]);

  return (
    <ProList<any>
      pagination={false}
      showActions="hover"
      rowSelection={{}}
      grid={{ gutter: 16, column: 4 }}
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
              return <Tag color="#5BD8A6">语1雀专栏</Tag>
          },
        },
        type: {},
        avatar: {},
        content: {
          // render: (entity: any) => {
          //   console.log("entity", entity)
          //   return (
          //     <div>
          //       段落示意：蚂蚁金服设计平台
          //       design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
          //       design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
          //     </div>
          //   );
          // },
        },
        actions: {},
      }}
      dataSource={data}
    />
  );
};

export default DeviceStatusPropertyPage;