
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
import { CopyOutlined, DownloadOutlined, EyeOutlined, ImportOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';

const DeviceBaseTabPage: React.FC<{deviceInfo: API.protoDevice;}> = ({deviceInfo}) => {
    const copyText = useMemo(() => {
        return deviceInfo
          ? JSON.stringify(deviceInfo)
          : '';
      }, [deviceInfo]);

    return (
        <ProDescriptions
        title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>设备基础信息</div>
              <CopyToClipboard
                text={copyText}
                onCopy={() => {
                  message.success('复制成功');
                }}
              >
              <Button size='small' style={{marginLeft:'20px'}} icon={<CopyOutlined/>} type="primary">一键复制</Button>
              </CopyToClipboard>
            </div>
          }
        dataSource={deviceInfo}
        columns={[
          {
            title: '设备名称',
            dataIndex: 'name',
          },
          {
            title: '设备sn',
            dataIndex: 'sn',
            ellipsis: true,
            copyable: true,
          },
          {
            title: '设备密钥',
            dataIndex: 'secret',
            ellipsis: true,
            copyable: true,
          },
          {
            title: '在线状态',
            dataIndex: 'online',
          },
          {
            title: '创建时间',
            dataIndex: 'create_time',
            valueType: 'date',
            render: (_, entity: any) => timestampToDateStr(Number(entity.create_time), 'YYYY-MM-DD HH:mm:ss.SSS'),
          },
          {
            title: '描述',
            dataIndex: 'desc',
          },
        ]}
      >
      </ProDescriptions>
    );
};

export default DeviceBaseTabPage;