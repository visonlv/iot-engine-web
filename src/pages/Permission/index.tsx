import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Button} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { permissionServiceDel, permissionServicePage } from '@/services/auth/permissionService';
import AddOrUpdateApiPermission from './components/AddOrUpdateApiPermission';
import useTableDelete from '@/hooks/useTableDelete';
import { timestampToDateStr } from '@/utils/date';
import { appServicePage } from '@/services/auth/appService';
import { PAGE_SIZE_MAX, RESOURCE_TYPE_API, RESOURCE_TYPE_MENU, RESOURCE_TYPE_RULE, RESOURCE_TYPE_VALUE } from '@/utils/const';
import { roleServicePage } from '@/services/auth/roleService';
import AddOrUpdateMenuPermission from './components/AddOrUpdateMenuPermission';
import AddOrUpdateRulePermission from './components/AddOrUpdateRulePermission';
import ShowJson from './components/ShowJson';

type selectResult = {
  list: { label: string; value: string }[];
  map: {[key:string]:{ text: string }};
};

const Page: React.FC = () => {
  const { deleteHandler } = useTableDelete();
  const [selectRoles, setSelectRoles] = useState<selectResult>({list:[],map:{}});
  const [selectApps, setSelectApps] = useState<selectResult>({list:[],map:{}});

  const pageRef = useRef<ActionType>();
  // 删除操作
  const showDeleteConfirm = (record: API.authPermission) => {
    const body:API.authPermissionDelReq = {
      id: record.id ?? '',
    };
    deleteHandler<API.authPermissionDelReq>(permissionServiceDel, pageRef, {
      title: '是否删除当前权限',
      content: `删除后无法恢复，请确认`,
      body,
    });
  };

  /**
   * 查询数据
   * */
  const queryPage = async (params: any,): Promise<{ data?: API.authPermission[]; total?: number }> => {
    const body:API.authPermissionPageReq = {
      page_index:params.current,
      page_size:params.pageSize,
      role_id:params.role_id,
      app_id:params.app_id,
    };
    const res = await permissionServicePage(body);
    return {
      data: res.list,
      total: res.total,
    };
  };

  const queryAppList = async () => {
    const res = await appServicePage({
      page_index: 1,
      page_size: PAGE_SIZE_MAX,
    });
    if (res.code === 0) {
      const list = (res.list as API.authApp[]).map((item : API.authApp) => {
        return {
          label: item.name,
          value: item.id,
        } as { label: string; value: string };
      });
      const m : {[key:string]:{ text: string}} = {} 
      for (let v of list) {  
        m[v.value] = {text:v.label};  
      } 
      setSelectApps({list:list,map:m})
    }
  };

  const queryRoleList = async () => {
    const res = await roleServicePage({
      page_index: 1,
      page_size: PAGE_SIZE_MAX,
    });
    if (res.code === 0) {
      const list = (res.list as API.authRole[]).map((item : API.authRole) => {
        return {
          label: item.name,
          value: item.id,
        } as { label: string; value: string };
      });
      const m : {[key:string]:{ text: string}} = {} 
      for (let v of list) {  
        m[v.value] = {text:v.label};  
      } 

      setSelectRoles({list:list,map:m})
    }
  };

  useEffect(() => {
    queryAppList();
    queryRoleList();
  }, []);

  const columns: ProColumns<API.authPermission>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: "角色",
      dataIndex: 'role_id',
      valueType: 'select',
      valueEnum : selectRoles.map,
    },
    {
      title: "应用",
      dataIndex: 'app_id',
      valueType: 'select',
      valueEnum : selectApps.map,
    },
    {
      title: "资源类型",
      dataIndex: 'resource_type',
      valueEnum:RESOURCE_TYPE_VALUE,
      search:false
    },
    {
      title: "资源内容",
      dataIndex: 'resources_json',
      search: false,
      render: (_, entity: API.authPermission) => {
        return <>
        <ShowJson
          key={entity.id}
          info={{name:"",content:entity.resources_json}}
        />
        </>
      },

    },
    {
      title: "创建时间",
      sorter: true,
      dataIndex: 'create_time',
      valueType: 'dateTime',
      render: (_, entity: API.authPermission) => timestampToDateStr(Number(entity.create_time), 'YYYY-MM-DD HH:mm:ss.SSS'),
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record: API.authPermission) => {
        return (
          <>
          {record.resource_type === RESOURCE_TYPE_API && (
              <AddOrUpdateApiPermission
              flag="update"
              key={record.id}
              record={record}
              pageRef={pageRef}
              selectAppOptions={selectApps.list}
              selectRoleOptions={selectRoles.list}
          />)}

          {record.resource_type === RESOURCE_TYPE_MENU && (
              <AddOrUpdateMenuPermission
              flag="update"
              key={record.id}
              record={record}
              pageRef={pageRef}
              selectAppOptions={selectApps.list}
              selectRoleOptions={selectRoles.list}
          />)}

          {record.resource_type === RESOURCE_TYPE_RULE && (
              <AddOrUpdateRulePermission
              flag="update"
              key={record.id}
              record={record}
              pageRef={pageRef}
              selectAppOptions={selectApps.list}
              selectRoleOptions={selectRoles.list}
          />)}

            <Button
              type="link"
              danger
              onClick={() => {
                showDeleteConfirm(record)
              }}
              style={{ paddingRight: 10 }}
            >
              删除
            </Button>
          </>
        )
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable
        rowKey="id"
        columns={columns}
        actionRef={pageRef}
        bordered
        request={queryPage}
        search={{
          span: 8,
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
          <AddOrUpdateApiPermission
          flag="create"
          pageRef={pageRef}
          key="createPermission"
          selectAppOptions={selectApps.list}
          selectRoleOptions={selectRoles.list}
        />,
        <AddOrUpdateMenuPermission
          flag="create"
          pageRef={pageRef}
          key="createPermission"
          selectAppOptions={selectApps.list}
          selectRoleOptions={selectRoles.list}
        />,
        <AddOrUpdateRulePermission
          flag="create"
          pageRef={pageRef}
          key="createPermission"
          selectAppOptions={selectApps.list}
          selectRoleOptions={selectRoles.list}
        />,
        ]}
      />
    </PageContainer>
  );
};

export default Page;