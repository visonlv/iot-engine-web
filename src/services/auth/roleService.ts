// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加角色 POST /rpc/auth/RoleService.Add */
export async function roleServiceAdd(body: API.authRoleAddReq, options?: { [key: string]: any }) {
  return request<API.authRoleAddResp>('/rpc/auth/RoleService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除角色 POST /rpc/auth/RoleService.Del */
export async function roleServiceDel(body: API.authRoleDelReq, options?: { [key: string]: any }) {
  return request<API.authRoleDelResp>('/rpc/auth/RoleService.Del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取角色 POST /rpc/auth/RoleService.Get */
export async function roleServiceGet(body: API.authRoleGetReq, options?: { [key: string]: any }) {
  return request<API.authRoleGetResp>('/rpc/auth/RoleService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用标识获取角色列表 POST /rpc/auth/RoleService.List */
export async function roleServiceList(body: API.authRoleListReq, options?: { [key: string]: any }) {
  return request<API.authRoleListResp>('/rpc/auth/RoleService.List', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色标识获取角色列表 POST /rpc/auth/RoleService.ListByCode */
export async function roleServiceListByCode(
  body: API.authRoleListByCodeReq,
  options?: { [key: string]: any },
) {
  return request<API.authRoleListByCodeResp>('/rpc/auth/RoleService.ListByCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色分页 POST /rpc/auth/RoleService.Page */
export async function roleServicePage(body: API.authRolePageReq, options?: { [key: string]: any }) {
  return request<API.authRolePageResp>('/rpc/auth/RoleService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新角色 POST /rpc/auth/RoleService.Update */
export async function roleServiceUpdate(
  body: API.authRoleUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.authRoleUpdateResp>('/rpc/auth/RoleService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}