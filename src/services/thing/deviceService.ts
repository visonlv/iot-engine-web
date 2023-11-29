// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 设备创建 POST /rpc/thing/DeviceService.Add */
export async function deviceServiceAdd(
  body: API.thingDeviceAddReq,
  options?: { [key: string]: any },
) {
  return request<API.thingDeviceAddResp>('/rpc/thing/DeviceService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设备鉴权 POST /rpc/thing/DeviceService.Auth */
export async function deviceServiceAuth(
  body: API.thingDeviceAuthReq,
  options?: { [key: string]: any },
) {
  return request<API.thingDeviceAuthResp>('/rpc/thing/DeviceService.Auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设备删除 POST /rpc/thing/DeviceService.Del */
export async function deviceServiceDel(
  body: API.thingDeviceDelReq,
  options?: { [key: string]: any },
) {
  return request<API.thingDeviceDelResp>('/rpc/thing/DeviceService.Del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设备获取 POST /rpc/thing/DeviceService.Get */
export async function deviceServiceGet(
  body: API.thingDeviceGetReq,
  options?: { [key: string]: any },
) {
  return request<API.thingDeviceGetResp>('/rpc/thing/DeviceService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设备列表 POST /rpc/thing/DeviceService.List */
export async function deviceServiceList(
  body: API.thingDeviceListReq,
  options?: { [key: string]: any },
) {
  return request<API.thingDeviceListResp>('/rpc/thing/DeviceService.List', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设备分页 POST /rpc/thing/DeviceService.Page */
export async function deviceServicePage(
  body: API.thingDevicePageReq,
  options?: { [key: string]: any },
) {
  return request<API.thingDevicePageResp>('/rpc/thing/DeviceService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设备修改 POST /rpc/thing/DeviceService.Update */
export async function deviceServiceUpdate(
  body: API.thingDeviceUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.thingDeviceUpdateResp>('/rpc/thing/DeviceService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
