// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加应用 POST /rpc/auth/AppService.Add */
export async function appServiceAdd(body: API.authAppAddReq, options?: { [key: string]: any }) {
  return request<API.authAppAddResp>('/rpc/auth/AppService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除应用 POST /rpc/auth/AppService.Del */
export async function appServiceDel(body: API.authAppDelReq, options?: { [key: string]: any }) {
  return request<API.authAppDelResp>('/rpc/auth/AppService.Del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取应用 POST /rpc/auth/AppService.Get */
export async function appServiceGet(body: API.authAppGetReq, options?: { [key: string]: any }) {
  return request<API.authAppGetResp>('/rpc/auth/AppService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用分页 POST /rpc/auth/AppService.Page */
export async function appServicePage(body: API.authAppPageReq, options?: { [key: string]: any }) {
  return request<API.authAppPageResp>('/rpc/auth/AppService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新应用 POST /rpc/auth/AppService.Update */
export async function appServiceUpdate(
  body: API.authAppUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.authAppUpdateResp>('/rpc/auth/AppService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
