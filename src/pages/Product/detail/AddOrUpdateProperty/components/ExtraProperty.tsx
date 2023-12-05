import {
  ProForm,
  ProFormDigit,
  ProFormList,
  ProFormText,
  ProFormSwitch,
  ProFormDigitRange,
  ProFormFieldSet
} from '@ant-design/pro-components';
import { THING_DATA_TYPE_ARRAY, THING_DATA_TYPE_BOOL, THING_DATA_TYPE_FLOAT, THING_DATA_TYPE_INT, THING_DATA_TYPE_OBJECT, THING_DATA_TYPE_STRING,} from '@/utils/const';
import { ModelProperty } from '@/utils/type';
import OneProperty from '../../components/OneProperty';

const ExtraProperty: React.FC<{
    modelProperty: ModelProperty;
  }> = ({modelProperty}) => {

  return (
    <ProForm.Group
        title="额外属性"
    >
    {modelProperty.type === THING_DATA_TYPE_BOOL && (
        <ProFormFieldSet
        name="bool_options"
        label={false}
      >
        <ProFormSwitch
        name="default"
        label="初始值"
        width = 'md'
        colProps = {
            {
            xs: 24,
            md: 8,
            }
        }
        />
        </ProFormFieldSet>
    )}

    {modelProperty.type === THING_DATA_TYPE_INT && (
        <ProFormFieldSet name="int_options">
        <ProFormDigit
        label="初始值"
        placeholder="请输入初始值"
        rules={[{ required: true, message: '请输入初始值' }]}
        width = 'md'
        colProps = {
            {
            xs: 24,
            md: 8,
            }
        }
        />
        <ProFormDigitRange
            label="数值范围"
            placeholder="请输入数值范围"
            width = 'md'
            colProps = {
                {
                xs: 24,
                md: 8,
                }
            }
        />

        <ProFormDigit
        label="步长"
        placeholder="请输入步长"
        width = 'md'
        colProps = {
            {
            xs: 24,
            md: 8,
            }
        }
        />

        <ProFormText
        label="单位"
        placeholder="请输入单位"
        width = 'md'
        colProps = {
            {
            xs: 24,
            md: 8,
            }
        }
        />
       </ProFormFieldSet>
    )} 

    {modelProperty.type === THING_DATA_TYPE_STRING && (
        <ProFormFieldSet
            name="string_options"
        >
        <ProFormDigitRange
            label="字节数范围"
            width = 'md'
            colProps = {
                {
                xs: 24,
                md: 8,
                }
            }
        />
       </ProFormFieldSet>
    )}  

    {modelProperty.type === THING_DATA_TYPE_FLOAT && (
        <ProFormFieldSet
            name="float_options"
        >
        <ProFormDigit
        label="初始值"
        placeholder="请输入初始值"
        rules={[{ required: true, message: '请选择初始值' }]}
        width = 'md'
        colProps = {
            {
            xs: 24,
            md: 8,
            }
        }
        />
        <ProFormDigitRange
            label="数值范围"
            placeholder="请输入数值范围"
            rules={[{ required: true, message: '请选择数值范围' }]}
            width = 'md'
            colProps = {
                {
                xs: 24,
                md: 8,
                }
            }
        />
        <ProFormDigit
        label="步长"
        placeholder="请输入步长"
        rules={[{ required: true, message: '请选择步长' }]}
        width = 'md'
        colProps = {
            {
            xs: 24,
            md: 8,
            }
        }
        />
        <ProFormText
        label="单位"
        placeholder="请输入单位"
        rules={[{ required: true, message: '请选择单位' }]}
        width = 'md'
        colProps = {
            {
            xs: 24,
            md: 8,
            }
        }
        />
       </ProFormFieldSet>
    )}  


    {modelProperty.type === THING_DATA_TYPE_ARRAY && (
        <ProFormFieldSet
            name="array_options"
        >
       <ProFormDigitRange
            label="元素个数范围"
            rules={[{ required: true, message: '请输入范围' }]}
            width = 'md'
            colProps = {
                {
                xs: 24,
                md: 8,
                }
            }
        />

        <ProFormList 
            name="array_options_items"
            max = {1}
            min = {1}
            itemRender={({ listDom, action }, { record }) => {
                console.log("record", record)
                return (
                    <OneProperty data={record} subSelect={true} key={record.code}></OneProperty>
                  );
            }}
        >
      </ProFormList>
       </ProFormFieldSet>
    )}  

    {modelProperty.type === THING_DATA_TYPE_OBJECT && (
        <ProFormFieldSet
            name="object_options"
        >
        <ProFormList 
            name="object_options_items"
            min = {0}
            max = {10}
            itemRender={({ listDom, action }, { record }) => {
                console.log("record", record)
                return (
                    <OneProperty data={record} subSelect={true} key={record.code}></OneProperty>
                  );
            }}
        >
      </ProFormList>
       </ProFormFieldSet>
    )}  
    </ProForm.Group>
  );
};

export default ExtraProperty;