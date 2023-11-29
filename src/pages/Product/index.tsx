import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useRef } from 'react';
import { productServiceDel, productServicePage } from '@/services/thing/productService';
import useTableDelete from '@/hooks/useTableDelete';
import { timestampToDateStr } from '@/utils/date';

const ProductPage: React.FC = () => {
  const { deleteHandler } = useTableDelete();
  const pageRef = useRef<ActionType>();
  // 删除操作
  const showDeleteConfirm = (record: API.thingProduct) => {
    const body: API.thingProductDelReq = {
      id: record.id ?? '',
    };
    deleteHandler<API.thingProductDelReq>(productServiceDel, pageRef, {
      title: '是否删除当前产品',
      content: `所选产品: ${record?.name ?? '未知产品'},  删除后无法恢复，请确认`,
      body,
    });
  };

  /**
   * 查询数据
   * */
  const queryPage = async (params: any): Promise<{ data?: API.thingProduct[]; total?: number }> => {
    const body: API.thingProductPageReq = {
      page_index: params.current,
      page_size: params.pageSize,
      name: params.name,
    };
    const res = await productServicePage(body);
    return {
      data: res.items,
      total: res.total,
    };
  };

  const columns: ProColumns<API.thingProduct>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '产品名称',
      dataIndex: 'name',
    },
    {
      title: '产品型号',
      dataIndex: 'model',
    },
    {
      title: '产品KEY',
      dataIndex: 'pk',
    },
    {
      title: '传输类型',
      dataIndex: 'transform',
      search: false,
    },
    {
      title: '产品类型',
      dataIndex: 'type',
      search: false,
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'create_time',
      valueType: 'dateTime',
      render: (_, entity: API.thingProduct) =>
        timestampToDateStr(Number(entity.create_time), 'YYYY-MM-DD HH:mm:ss.SSS'),
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record: API.thingProduct) => (
        <>
          <Button
            type="link"
            danger
            onClick={() => {
              showDeleteConfirm(record);
            }}
            style={{ paddingRight: 10 }}
          >
            删除
          </Button>
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.thingProduct, API.thingProductPageReq>
        rowKey="id"
        columns={columns}
        actionRef={pageRef}
        bordered
        request={queryPage}
        search={{
          span: 6,
          labelWidth: 'auto',
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        pagination={{
          pageSize: 10,
        }}
        dateFormatter="string"
        toolBarRender={() => []}
      />
    </PageContainer>
  );
};

export default ProductPage;
