
import { Card,  Tabs,  } from 'antd';
import React, { useEffect, useState } from 'react';
import DeviceStatusPageProperty from './DeviceStatusPageProperty';
import DeviceStatusPageEvent from './DeviceStatusPageEvent';
import DeviceStatusPageService from './DeviceStatusPageService';
import { deviceServiceGet } from '@/services/thing/deviceService';

const { TabPane } = Tabs;
const DeviceStatusPage: React.FC<{parentActiveKey:string, deviceInfo: API.protoDevice;}> = ({parentActiveKey,deviceInfo}) => {
    const [activeKey, setActiveKey] = useState<string>('1');
    const onChange = (key: string) => setActiveKey(key);
   
    return (
    <Card>
        <Tabs onChange={onChange}>
            <TabPane tab="属性" key="1" >
                <DeviceStatusPageProperty activeKey={activeKey} deviceInfo={deviceInfo} key="DeviceStatusPageProperty" />
            </TabPane>
            <TabPane tab="服务" key="2">
                <DeviceStatusPageService activeKey={activeKey} deviceInfo={deviceInfo} key="DeviceStatusPageService" />
            </TabPane>
            <TabPane tab="事件" key="3">
                <DeviceStatusPageEvent activeKey={activeKey} deviceInfo={deviceInfo} key="DeviceStatusPageEvent" />
            </TabPane>
        </Tabs>
    </Card>
    );
};

export default DeviceStatusPage;