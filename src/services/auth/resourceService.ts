// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加资源 POST /rpc/auth/ResourceService.Add */
export async function resourceServiceAdd(
  body: API.authAddResourceReq,
  options?: { [key: string]: any },
) {
  return request<API.authAddResourceResp>('/rpc/auth/ResourceService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除资源 POST /rpc/auth/ResourceService.Del */
export async function resourceServiceDel(body: API.authRequest, options?: { [key: string]: any }) {
  return request<API.authResponse>('/rpc/auth/ResourceService.Del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资源详情 POST /rpc/auth/ResourceService.Get */
export async function resourceServiceGet(body: API.authRequest, options?: { [key: string]: any }) {
  return request<API.authResourceGetResp>('/rpc/auth/ResourceService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资源列表 POST /rpc/auth/ResourceService.Page */
export async function resourceServicePage(
  body: API.authResourcePageReq,
  options?: { [key: string]: any },
) {
  return request<API.authResourcePageResp>('/rpc/auth/ResourceService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 规则类型 POST /rpc/auth/ResourceService.RuleType */
export async function resourceServiceRuleType(
  body: API.authResourceRuleTypeReq,
  options?: { [key: string]: any },
) {
  return request<API.authResourceRuleTypeResp>('/rpc/auth/ResourceService.RuleType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新资源 POST /rpc/auth/ResourceService.Update */
export async function resourceServiceUpdate(
  body: API.authUpdateResourceReq,
  options?: { [key: string]: any },
) {
  return request<API.authResponse>('/rpc/auth/ResourceService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
