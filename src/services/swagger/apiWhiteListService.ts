// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加白名单 返回值: An unexpected error response. POST /rpc/auth/ApiWhiteListService.Add */
export async function apiWhiteListServiceAdd(
  body: API.authApiWhiteListAddReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/ApiWhiteListService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除白名单 返回值: An unexpected error response. POST /rpc/auth/ApiWhiteListService.Del */
export async function apiWhiteListServiceDel(
  body: API.authApiWhiteListDelReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/ApiWhiteListService.Del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页白名单 返回值: An unexpected error response. POST /rpc/auth/ApiWhiteListService.Page */
export async function apiWhiteListServicePage(
  body: API.authApiWhiteListPageReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/ApiWhiteListService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 刷新白名单 返回值: An unexpected error response. POST /rpc/auth/ApiWhiteListService.Refresh */
export async function apiWhiteListServiceRefresh(
  body: API.authApiWhiteListRefreshReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/ApiWhiteListService.Refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑白名单 返回值: An unexpected error response. POST /rpc/auth/ApiWhiteListService.Update */
export async function apiWhiteListServiceUpdate(
  body: API.authApiWhiteListUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.runtimeError>('/rpc/auth/ApiWhiteListService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
