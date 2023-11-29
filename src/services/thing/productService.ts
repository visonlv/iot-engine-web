// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 产品创建 POST /rpc/thing/ProductService.Add */
export async function productServiceAdd(
  body: API.thingProductAddReq,
  options?: { [key: string]: any },
) {
  return request<API.thingProductAddResp>('/rpc/thing/ProductService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品删除 POST /rpc/thing/ProductService.Del */
export async function productServiceDel(
  body: API.thingProductDelReq,
  options?: { [key: string]: any },
) {
  return request<API.thingProductDelResp>('/rpc/thing/ProductService.Del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品获取 POST /rpc/thing/ProductService.Get */
export async function productServiceGet(
  body: API.thingProductGetReq,
  options?: { [key: string]: any },
) {
  return request<API.thingProductGetResp>('/rpc/thing/ProductService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品列表 POST /rpc/thing/ProductService.List */
export async function productServiceList(
  body: API.thingProductListReq,
  options?: { [key: string]: any },
) {
  return request<API.thingProductListResp>('/rpc/thing/ProductService.List', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品分页 POST /rpc/thing/ProductService.Page */
export async function productServicePage(
  body: API.thingProductPageReq,
  options?: { [key: string]: any },
) {
  return request<API.thingProductPageResp>('/rpc/thing/ProductService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品修改 POST /rpc/thing/ProductService.Update */
export async function productServiceUpdate(
  body: API.thingProductUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.thingProductUpdateResp>('/rpc/thing/ProductService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
