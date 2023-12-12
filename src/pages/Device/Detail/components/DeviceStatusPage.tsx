
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
import DeviceStatusPageProperty from './DeviceStatusPageProperty';
import DeviceStatusPageEvent from './DeviceStatusPageEvent';
import DeviceStatusPageService from './DeviceStatusPageService';

const { TabPane } = Tabs;
const DeviceStatusPage: React.FC<{deviceId: string;}> = ({deviceId}) => {
    return (
    <Card>
        <Tabs>
            <TabPane tab="属性" key="1">
                <DeviceStatusPageProperty deviceId={deviceId} key="DeviceStatusPageProperty" />
            </TabPane>
            <TabPane tab="服务" key="2">
                <DeviceStatusPageService deviceId={deviceId} key="DeviceStatusPageService" />
            </TabPane>
            <TabPane tab="事件" key="3">
                <DeviceStatusPageEvent deviceId={deviceId} key="DeviceStatusPageEvent" />
            </TabPane>
        </Tabs>
    </Card>
    );
};

export default DeviceStatusPage;