import useTableAdd from '@/hooks/useTableAdd';
import useTableUpdate from '@/hooks/useTableUpdate';
import { permissionServiceAdd, permissionServiceUpdate } from '@/services/auth/permissionService';
import { resourceServicePage } from '@/services/auth/resourceService';
import { forwardingServiceService, forwardingServiceSetProperties } from '@/services/shadow/forwardingService';
import { msgLogServicePage } from '@/services/shadow/msgLogService';
import { deviceServiceGet } from '@/services/thing/deviceService';
import { productModelServiceGet, productModelServicePage } from '@/services/thing/productModelService';
import { productServiceGet } from '@/services/thing/productService';
import { PAGE_SIZE_MAX, RESOURCE_TYPE_API, THING_EVENT_TYPE, THING_MODEL_TYPE_EVENT, THING_MODEL_TYPE_SERVICE, THING_SERVICE_DIR_TYPE, THING_SERVICE_DIR_TYPE_DOWN, convert2ValueEnum } from '@/utils/const';
import { dateStrToTimestamp, timestampToDateStr } from '@/utils/date';
import { LeftOutlined } from '@ant-design/icons';

import {
  ProFormSelect,
  ProFormTextArea,
  ProFormSwitch,
  ProForm,
  ProColumns,
  ProTable,
  ActionType,
  ProDescriptions,
} from '@ant-design/pro-components';
import { Button, Card, Col, Tabs, Row, message, FormInstance } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';

const { TabPane } = Tabs;

const DeviceDebugPageService: React.FC<{
    productInfo: API.protoProduct;deviceInfo: API.protoDevice;
}> = ({ productInfo, deviceInfo}) => {
  const [modelServiceList, setModelServiceList] = useState<API.protoProductModel[]>([]);
  const [reqResult, setReqResult] = useState<string>("");
  const [selectCode, setSelectCode] = useState<string>("");
  const formRef = useRef<FormInstance>();

  const queryModelDef = async () => {
    const param : API.protoProductModelPageReq = {
        page_index: 1,
        page_size: PAGE_SIZE_MAX,
        product_id: productInfo.id,
        type:THING_MODEL_TYPE_SERVICE,
    };
    const res = await productModelServicePage(param);
    if (res.code === 0) {
      const pList = res.items!.filter((item)=>{
        const info = JSON.parse(item.model_def!)
        return info.dir === THING_SERVICE_DIR_TYPE_DOWN
      })
      setModelServiceList(pList)
      const info = `{\n  "key":"value"\n}`
      formRef.current?.setFieldValue("params",info)
    }
  };

  useEffect(() => {
    queryModelDef()
  }, []);

  
  const formSubmit = async (values: any) => {
    console.log("values.params", values.params)
    let obj = {}
    try {
      obj = JSON.parse(values.params) as any
    } catch (e) {
      message.error("不是json格式")
      return
    }
    if ((typeof obj === 'object' && !Array.isArray(obj)) === false) {
        message.error("必须json的对象格式")
        return
    }
    let contextId:string = crypto.randomUUID()
    if(values.async) {
        contextId = ""
    }

    let code = selectCode
    if(selectCode === "" && modelServiceList.length > 0) {
      code = modelServiceList[0].code as string
    }
    if(code === "") {
      message.error("请选择服务进行操作")
      return
    }

    const payloadInfo = {
      id : crypto.randomUUID(),
      context_id : contextId,
      time : new Date().getTime(),
      params : obj,
    }

    const payloadStr = JSON.stringify(payloadInfo)

    const body : API.protoForwardingServiceReq = {
        sn: deviceInfo.sn,
        context_id: contextId,
        code: code,
        timeout: 10000,
        payload:payloadStr,
    };
    const res = await forwardingServiceService(body);
    const result = JSON.stringify(res, null, 2)
    const reqData = JSON.stringify(body, null, 2)

    setReqResult("<h3>请求参数:</h3>" + reqData + "<h3>请求结果:</h3>" + result)
    if (res.code === 0) {
      message.success("服务调用成功")
    }
  };

  return (
    <Card>
        <Row>
            <Col span={4}>
            <Tabs tabPosition='left' onChange={(value)=>{
                setSelectCode(value)
            }}>

            {useMemo(() =>{return modelServiceList.map((item)=>{
              return (
                <TabPane tab={item.name} key={item.code}/>
            )
            })}, [modelServiceList])}
                
            </Tabs>
            </Col>
            <Col span={12}>
                <div style={{fontWeight:'bold', fontSize:16}}>请求参数</div>
                <ProForm style={{marginTop:"20px"}}
                formRef={formRef}
                onFinish={formSubmit}
                >
                <ProFormTextArea 
                    bordered
                    name="params"
                    placeholder="请输入参数"
                    rules={[
                        {
                            required: true,
                            message: '请输入参数',
                        },
                    ]}
                    fieldProps={{
                        cols:18,
                        rows:18,
                    }}
                />

            <ProFormSwitch
                name="async"
                label="异步调用"
            />
            </ProForm>
            </Col>
            <Col span={8}>
            <div style={{fontWeight:'bold', fontSize:16, marginLeft:"10px"}}>请求结果</div>
            <div style={{marginTop:"20px", marginLeft:"10px"}} dangerouslySetInnerHTML={{__html: reqResult}} /> 
            </Col>
        </Row>
    </Card>
  );
};

export default DeviceDebugPageService;
