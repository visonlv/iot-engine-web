// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 权限添加 POST /rpc/auth/PermissionService.Add */
export async function permissionServiceAdd(
  body: API.authPermissionAddReq,
  options?: { [key: string]: any },
) {
  return request<API.authPermissionAddResp>('/rpc/auth/PermissionService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 权限删除 POST /rpc/auth/PermissionService.Del */
export async function permissionServiceDel(
  body: API.authPermissionDelReq,
  options?: { [key: string]: any },
) {
  return request<API.authPermissionDelResp>('/rpc/auth/PermissionService.Del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 权限详情 POST /rpc/auth/PermissionService.Get */
export async function permissionServiceGet(
  body: API.authPermissionGetReq,
  options?: { [key: string]: any },
) {
  return request<API.authPermissionGetResp>('/rpc/auth/PermissionService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色对应应用的菜单 POST /rpc/auth/PermissionService.GetMenu */
export async function permissionServiceGetMenu(
  body: API.authPermissionGetMenuReq,
  options?: { [key: string]: any },
) {
  return request<API.authPermissionGetMenuResp>('/rpc/auth/PermissionService.GetMenu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 权限分页 POST /rpc/auth/PermissionService.Page */
export async function permissionServicePage(
  body: API.authPermissionPageReq,
  options?: { [key: string]: any },
) {
  return request<API.authPermissionPageResp>('/rpc/auth/PermissionService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 权限更新 POST /rpc/auth/PermissionService.Update */
export async function permissionServiceUpdate(
  body: API.authPermissionUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.authPermissionUpdateResp>('/rpc/auth/PermissionService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}