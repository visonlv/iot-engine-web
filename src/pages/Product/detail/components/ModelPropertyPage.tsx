import { CopyOutlined, DownloadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Alert, Button, Input, message, Modal } from 'antd';
import styles from './style.less';
import { productModelServiceDel, productModelServicePage } from '@/services/thing/productModelService';
import React, { useEffect, useRef, useState } from 'react';
import { THING_DATA_TYPE, THING_DATA_TYPE_BOOL, THING_DATA_TYPE_FLOAT, THING_DATA_TYPE_INT, THING_EVENT_TYPE, THING_MODEL_TYPE_PROPERTY, THING_PROPERTY_MODE, convert2ValueEnum } from '@/utils/const';
import useTableDelete from '@/hooks/useTableDelete';
import { history } from '@@/core/history';
import { productServiceGet } from '@/services/thing/productService';
import { useParams } from '@umijs/max';

const ModelPropertyPage: React.FC<{
  productInfo: API.protoProduct;
}> = ({productInfo}) => {
  const { deleteHandler } = useTableDelete();
  const pageRef = useRef<ActionType>();
  const thingDataTypeMap = useRef<{ [key: string]: { text: string } }>(
    convert2ValueEnum(THING_DATA_TYPE),
  );
  const thingModeMap = useRef<{ [key: string]: { text: string } }>(
    convert2ValueEnum(THING_PROPERTY_MODE),
  );

  const getDefinition = (record: API.protoProductModel) => {
    try {
      return JSON.parse(record.model_def!);
    } catch (e) {
      console.error(e);
      message.error('JSON 解析错误');
    }
  };

  // 删除操作
  const showDeleteConfirm = (record: API.protoProductModel) => {
    const body: API.protoProductModelDelReq = {
      id: record.id ?? '',
    };
    deleteHandler<API.protoProductModelDelReq>(productModelServiceDel, pageRef, {
      title: '是否删除当前属性',
      content: `所选属性: ${record?.name ?? '未知属性'},  删除后无法恢复，请确认`,
      body,
    });
  };

  const columns: ProColumns<API.protoProductModel>[] = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '标识',
      dataIndex: 'code',
    },
    {
      title: '数据类型',
      dataIndex:'model_def',
      search:false,
      render: (_: any, entity: API.protoProductModel) => {
        const dataType = getDefinition(entity).type as string;
        const info = thingDataTypeMap.current[dataType]
        return info === undefined? '-':info.text;
      },
    },
    {
      title: '读写类型',
      dataIndex: 'model_def',
      search:false,
      render: (_: any, entity: API.protoProductModel) => {
        const mode = getDefinition(entity).mode as string;
        const info = thingModeMap.current[mode];
        return info === undefined? '-':info.text;
      },
    },
    {
      title: '初始值',
      dataIndex: 'model_def',
      search:false,
      render: (_: any, entity: API.protoProductModel) => {
        const modelDef = getDefinition(entity)
        const dataType = modelDef.type as string;
        if (dataType === THING_DATA_TYPE_BOOL) {
          return String(modelDef.bool_options.default??false)
        } else  if (dataType === THING_DATA_TYPE_INT) {
          return String(modelDef.int_options.default??false)
        } else  if (dataType === THING_DATA_TYPE_FLOAT) {
          return String(modelDef.float_options.default??false)
        } else {
          return "-"
        }
      },
    },
    {
      title: '取值范围',
      dataIndex: 'model_def',
      search:false,
      render: (_: any, entity: API.protoProductModel) => {
        const modelDef = getDefinition(entity)
        const dataType = modelDef.type as string;
        if (dataType === THING_DATA_TYPE_INT) {
          return modelDef.int_options.min + "~" + modelDef.int_options.max
        } else if (dataType === THING_DATA_TYPE_FLOAT) {
          return modelDef.float_options.min + "~" + modelDef.float_options.max
        } else {
          return "-"
        }
      },
    },
    {
      title: '步长',
      dataIndex: 'model_def',
      search:false,
      render: (_: any, entity: API.protoProductModel) => {
        const modelDef = getDefinition(entity)
        const dataType = modelDef.type as string;
        if (dataType === THING_DATA_TYPE_INT) {
          return modelDef.int_options.step
        } else if (dataType === THING_DATA_TYPE_FLOAT) {
          return modelDef.float_options.step
        } else {
          return "-"
        }
      },
    },
    {
      title: '单位',
      dataIndex: 'model_def',
      search:false,
      render: (_: any, entity: API.protoProductModel) => {
        const modelDef = getDefinition(entity)
        const dataType = modelDef.type as string;
        if (dataType === THING_DATA_TYPE_INT) {
          return modelDef.int_options.unit
        } else if (dataType === THING_DATA_TYPE_FLOAT) {
          return modelDef.float_options.unit
        } else {
          return "-"
        }
      },
    },
    {
      title: '描述',
      dataIndex: 'desc',
      search:false,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record: API.protoProductModel) => (
        <>
         <a
            key="updateModelProperty"
            onClick={() => {
              history.push('/product/detail/' + productInfo.id + '/property/'+record.id);
            }}
          >
            编辑
          </a>

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

  const queryPage = async (params: any): Promise<{ data?: API.protoProductModel[]; total?: number }> => {
    const param : API.protoProductModelPageReq = {
        page_index: params.current,
        page_size: params.pageSize,
        name: params.name,
        code: params.code,
        type: THING_MODEL_TYPE_PROPERTY,
        product_id: productInfo?.id,
    };
    const res = await productModelServicePage(param);
    if (res.code !== 0) {
      return {
        data: [],
        total: 0,
      };
    }
    return {
      data: res.items,
      total: res.total,
    };
  
  };

  return (
    <ProTable
        rowKey="id"
        columns={columns}
        actionRef={pageRef}
        bordered
        request={queryPage}
        search={{
          span: 5,
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
        toolBarRender={() => [
          <a
            key="addModelProperty"
            onClick={() => {
              history.push('/product/detail/' + productInfo.id + '/property/0');
            }}
          >
            添加
          </a>
        ]}
      />
  );
};

export default ModelPropertyPage;