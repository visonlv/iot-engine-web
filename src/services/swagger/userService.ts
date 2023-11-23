// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加用户 返回值: An unexpected error response. POST /rpc/auth/UserService.Add */
export async function userServiceAdd(body: API.authUserAddReq, options?: { [key: string]: any }) {
  return request<API.runtimeError>('/rpc/auth/UserService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 返回值: An unexpected error response. POST /rpc/auth/UserService.Del */
export async function userServiceDel(body: API.authUserDelReq, options?: { [key: string]: any }) {
  return request<API.runtimeError>('/rpc/auth/UserService.Del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户详情 返回值: An unexpected error response. POST /rpc/auth/UserService.Get */
export async function userServiceGet(body: API.authUserGetReq, options?: { [key: string]: any }) {
  return request<API.runtimeError>('/rpc/auth/UserService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关联用户到角色 返回值: An unexpected error response. POST /rpc/auth/UserService.LinkUserRoles */
export async function userServiceLinkUserRoles(
  body: API.authLinkUserRolesReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/UserService.LinkUserRoles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询用户列表 返回值: An unexpected error response. POST /rpc/auth/UserService.Page */
export async function userServicePage(body: API.authUserPageReq, options?: { [key: string]: any }) {
  return request<API.runtimeError>('/rpc/auth/UserService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** SQL语句分页查询用户列表 返回值: An unexpected error response. POST /rpc/auth/UserService.PageBySql */
export async function userServicePageBySql(
  body: API.authUserPageBySqlReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/UserService.PageBySql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消关联用户到角色 返回值: An unexpected error response. POST /rpc/auth/UserService.UnlinkUserRoles */
export async function userServiceUnlinkUserRoles(
  body: API.authUnlinkUserRolesReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/UserService.UnlinkUserRoles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户 返回值: An unexpected error response. POST /rpc/auth/UserService.Update */
export async function userServiceUpdate(
  body: API.authUserUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/UserService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户密码 返回值: An unexpected error response. POST /rpc/auth/UserService.UpdatePassword */
export async function userServiceUpdatePassword(
  body: API.authUpdatePasswordReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/UserService.UpdatePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
