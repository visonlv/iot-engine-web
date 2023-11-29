import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useRef } from 'react';
import { deviceServiceDel, deviceServicePage } from '@/services/thing/deviceService';
import useTableDelete from '@/hooks/useTableDelete';
import { timestampToDateStr } from '@/utils/date';

const DevicePage: React.FC = () => {
  const { deleteHandler } = useTableDelete();
  const pageRef = useRef<ActionType>();
  // 删除操作
  const showDeleteConfirm = (record: API.thingDevice) => {
    const body: API.thingDeviceDelReq = {
      id: record.id ?? '',
    };
    deleteHandler<API.thingDeviceDelReq>(deviceServiceDel, pageRef, {
      title: '是否删除当前设备',
      content: `所选设备: ${record?.name ?? '未知设备'},  删除后无法恢复，请确认`,
      body,
    });
  };

  /**
   * 查询数据
   * */
  const queryPage = async (params: any): Promise<{ data?: API.thingDevice[]; total?: number }> => {
    const body: API.thingDevicePageReq = {
      page_index: params.current,
      page_size: params.pageSize,
      name: params.name,
    };
    const res = await deviceServicePage(body);
    return {
      data: res.items,
      total: res.total,
    };
  };

  const columns: ProColumns<API.thingDevice>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '设备名称',
      dataIndex: 'name',
    },
    {
      title: '设备sn',
      dataIndex: 'sn',
    },
    {
      title: '密钥',
      dataIndex: 'secret',
    },
    {
      title: '产品',
      dataIndex: 'pk',
      search: false,
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'create_time',
      valueType: 'dateTime',
      render: (_, entity: API.thingDevice) =>
        timestampToDateStr(Number(entity.create_time), 'YYYY-MM-DD HH:mm:ss.SSS'),
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record: API.thingDevice) => (
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
      <ProTable<API.thingDevice, API.thingDevicePageReq>
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

export default DevicePage;
