
import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  PageContainer,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormTreeSelect,
  ProFormSwitch
} from '@ant-design/pro-components';
import { TreeSelect, message } from 'antd';
import moment from 'dayjs';
import { CopyOutlined, DownloadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import styles from './style.less';
import { productModelServiceAdd, productModelServiceDel, productModelServiceGet, productModelServicePage, productModelServiceUpdate } from '@/services/thing/productModelService';
import { useEffect, useMemo, useRef,useState } from 'react';
import { useParams } from '@umijs/max';

import { THING_DATA_TYPE, THING_DATA_TYPE_ARRAY, THING_DATA_TYPE_BOOL, THING_DATA_TYPE_FLOAT, THING_DATA_TYPE_INT, THING_DATA_TYPE_OBJECT, THING_DATA_TYPE_STRING, THING_EVENT_TYPE, THING_MODEL_TYPE_EVENT, THING_MODEL_TYPE_PROPERTY, THING_PROPERTY_MODE, convert2ValueEnum } from '@/utils/const';
import { productServiceGet } from '@/services/thing/productService';
import { FormInstance } from 'antd/lib';
import ExtraProperty from './components/ExtraProperty';
import { ModelProperty, decodePropertyData, encodePropertyData } from '@/utils/type';

const AddOrUpdateProperty: React.FC = () => {
  const [productModelPropertyDef, setProductModelPropertyDef] = useState<ModelProperty>({} as ModelProperty);
  const params = useParams() as { id: string, subid: string };
  const formRef = useRef<FormInstance>()
  const dataTypeRef = useRef<{ [key: string]: { text: string } }>(
    convert2ValueEnum(THING_DATA_TYPE),
  );
  const propertyModeRef = useRef<{ [key: string]: { text: string } }>(
    convert2ValueEnum(THING_PROPERTY_MODE),
  );

  const formSubmit = async (values: any) => {
    const modelDef = encodePropertyData(values, true)
    let code = -1;
    let msg = "";
    if (params.subid === '0') {
      const addReq: API.protoProductModelAddReq = {
        name:values.name,
        code:values.code,
        type:THING_MODEL_TYPE_PROPERTY,
        product_id:params.id,
        desc:values.desc,
        model_def:JSON.stringify(modelDef),
      };
      const res = await productModelServiceAdd(addReq);
      code = res.code!;
      msg = res.msg!;
    } else {
      const updateReq: API.protoProductModelUpdateReq = {
        id:params.subid,
        name:values.name,
        code:values.code,
        type:THING_MODEL_TYPE_PROPERTY,
        desc:values.desc,
        model_def:JSON.stringify(modelDef),
      };
      const res = await productModelServiceUpdate(updateReq);
      code = res.code!;
      msg = res.msg!;
    }
    if (code === 0) {
      if (params.subid === '0') {
        message.success("添加成功")
      } else {
        message.success("更新成功")
      }
      history.back()
    } else {
      message.error(msg)
    }
  };

  const getDefinition = (record: API.protoProductModel) => {
    try {
      return JSON.parse(record.model_def!);
    } catch (e) {
      console.error(e);
      message.error('JSON 解析错误');
    }
  };

  const queryProductModel = async (): Promise<ModelProperty> => {
    if(params.subid === "0") {
      // 构造默认数据
      const p : ModelProperty = {
        code:"",
        name:"",
        desc:"",
        required:false,
        type:THING_DATA_TYPE_BOOL,
        default_bool:false,
        default_number:0,
        range:[0,0],
        step:0,
        unit:"",
        array_options_items:[],
        object_options_items:[],
        mode:"rw",
        is_use_shadow : false,
        is_no_record : false,
        is_sys : false,
      }
      setProductModelPropertyDef(p)
      console.log("p", p)
      return p
    }

    const body: API.protoProductModelGetReq = {
      id: params.subid,
    };
    const res = await productModelServiceGet(body);
    const m = getDefinition(res.item!)

    console.log("source data=", m)
    const p : ModelProperty = decodePropertyData(m)
    console.log("source data convertToCache=", p)
    setProductModelPropertyDef(p)

    console.log("p", p)
    return p;
  };

  useEffect(() => {
    queryProductModel();
  }, []);

  

  return (
    <PageContainer
    title={params.subid === "0"?"新建属性":productModelPropertyDef.name}
    onBack={() => history.back()}
    >
    <ProForm
      onFinish={async (values) => {
        console.log("values", values)
        formSubmit(values)
      }}
      grid={true}
      formRef={formRef}
      request={queryProductModel}
      autoFocusFirstInput
    >

      <ProFormText
        name="name"
        label="名称"
        placeholder="请输入名称"
        rules={[{ required: true, message: '请输入名称' }]}
        width = 'md'
        colProps = {
          {
            xs: 24,
            md: 8,
          }
        }
      />

      <ProFormText
        name="code"
        label="标识符"
        placeholder="请输入标识符"
        rules={[{ required: true, message: '请输入标识符' }]}
        width = 'md'
        colProps = {
          {
            xs: 24,
            md: 8,
          }
        }
      />

      <ProFormSelect
        name="mode"
        label="读写类型"
        placeholder="请输入读写类型"
        rules={[{ required: true, message: '请选择读写类型' }]}
        options={THING_PROPERTY_MODE}
        width = 'md'
        colProps = {
          {
            xs: 24,
            md: 8,
          }
        }
      />

      <ProFormSelect
        name="type"
        label="数据类型"
        placeholder="请输入数据类型"
        rules={[{ required: true, message: '请选择数据类型' }]}
        options={THING_DATA_TYPE}
        onChange={(value)=>{
          productModelPropertyDef.type = String(value)
          setProductModelPropertyDef({...productModelPropertyDef})
          return value
       }}
        width = 'md'
        colProps = {
          {
            xs: 24,
            md: 8,
          }
        }
      />

      <ProFormSwitch
        name="is_no_record"
        label="开启存储"
        width = 'md'
        colProps = {
          {
            xs: 24,
            md: 8,
          }
        }
      />

      <ProFormSwitch
        name="is_use_shadow"
        label="开启影子"
        width = 'md'
        colProps = {
          {
            xs: 24,
            md: 8,
          }
        }
      />

      <ProFormTextArea
        name="desc"
        label="描述"
        placeholder="请输入描述"
      />
      <ExtraProperty modelProperty={productModelPropertyDef}/>
    </ProForm>
    </PageContainer>
  );
};

export default AddOrUpdateProperty;