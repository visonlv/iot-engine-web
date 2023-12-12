
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
import DeviceDebugPageProperty from './DeviceDebugPageProperty';
import DeviceDebugPageService from './DeviceDebugPageService';
import DeviceDebugPageCommon from './DeviceDebugPageCommon';

const { TabPane } = Tabs;
const DeviceDebugPage: React.FC<{productInfo: API.protoProduct;deviceInfo: API.protoDevice;}> = ({productInfo, deviceInfo}) => {
    return (
    <Card>
        <Tabs>
            <TabPane tab="属性更新" key="1">
                <DeviceDebugPageProperty productInfo={productInfo} deviceInfo={deviceInfo} key="DeviceDebugPageProperty" />
            </TabPane>
            <TabPane tab="服务调用" key="2">
                <DeviceDebugPageService productInfo={productInfo} deviceInfo={deviceInfo} key="DeviceDebugPageService" />
            </TabPane>
            <TabPane tab="通用" key="3">
                <DeviceDebugPageCommon productInfo={productInfo} deviceInfo={deviceInfo} key="DeviceDebugPageCommon" />
            </TabPane>
        </Tabs>
    </Card>
    );
};

export default DeviceDebugPage;