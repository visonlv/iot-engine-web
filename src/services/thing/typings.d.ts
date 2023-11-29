declare namespace API {
  type thingDevice = {
    /** 设备id */
    id?: string;
    /** 产品pk */
    pk?: string;
    /** 设备名称 */
    name?: string;
    /** 设备sn */
    sn?: string;
    /** 后端生成 */
    group?: number;
    /** 设备秘钥 */
    secret?: string;
    /** 描述 */
    desc?: string;
    /** 创建时间 */
    create_time?: string;
  };

  type thingDeviceAddReq = {
    /** 产品pk */
    pk?: string;
    /** 设备名称 */
    name?: string;
    /** 设备sn */
    sn?: string;
    /** 设备秘钥 */
    secret?: string;
    /** 描述 */
    desc?: string;
  };

  type thingDeviceAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type thingDeviceAuthReq = {
    username?: string;
    password?: string;
    /** 供应商  emqx */
    supplier?: string;
  };

  type thingDeviceAuthResp = {
    code?: number;
    msg?: string;
    result?: string;
    is_superuser?: boolean;
  };

  type thingDeviceDelReq = {
    /** 设备id */
    id?: string;
  };

  type thingDeviceDelResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type thingDeviceGetReq = {
    /** 设备id */
    id?: string;
  };

  type thingDeviceGetResp = {
    code?: number;
    msg?: string;
    item?: thingDevice;
  };

  type thingDeviceListReq = {
    /** 产品pk */
    pk?: string;
    /** 设备名称 */
    name?: string;
    /** 设备sn */
    sn?: string;
  };

  type thingDeviceListResp = {
    code?: number;
    msg?: string;
    items?: thingDevice[];
  };

  type thingDevicePageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 产品pk */
    pk?: string;
    /** 设备名称 */
    name?: string;
    /** 设备sn */
    sn?: string;
  };

  type thingDevicePageResp = {
    code?: number;
    msg?: string;
    total?: number;
    items?: thingDevice[];
  };

  type thingDeviceUpdateReq = {
    /** 设备id */
    id?: string;
    /** 设备名称 */
    name?: string;
    /** 设备秘钥 */
    secret?: string;
    /** 描述 */
    desc?: string;
  };

  type thingDeviceUpdateResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type thingProduct = {
    /** 产品id 创建为空 */
    id?: string;
    /** 产品名称 */
    name?: string;
    /** 产品型号 */
    model?: string;
    /** 产品KEY */
    pk?: string;
    /** 传输类型 model 物模型 raw 透传 */
    transform?: string;
    /** 协议 mqtt3 mqtt5 websocket coap */
    protocol?: string;
    /** 产品类型 direct 直连 gateway 网关 child 子设备 */
    type?: string;
    /** 物模型 */
    thing_def?: string;
    /** 物模型 */
    thing_def_version?: string;
    /** 描述 */
    desc?: string;
    /** 创建时间 */
    create_time?: string;
  };

  type thingProductAddReq = {
    /** 产品名称 */
    name?: string;
    /** 产品型号 */
    model?: string;
    /** 传输类型 model 物模型 raw 透传 */
    transform?: string;
    /** 协议 mqtt3 mqtt5 websocket coap */
    protocol?: string;
    /** 产品类型 direct 直连 gateway 网关 child 子设备 */
    type?: string;
    /** 物模型 */
    thing_def?: string;
    /** 描述 */
    desc?: string;
  };

  type thingProductAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type thingProductDelReq = {
    /** 产品id */
    id?: string;
  };

  type thingProductDelResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type thingProductGetReq = {
    /** 产品id */
    id?: string;
  };

  type thingProductGetResp = {
    code?: number;
    msg?: string;
    item?: thingProduct;
  };

  type thingProductListReq = {
    /** 产品名称 */
    name?: string;
    /** 产品型号 */
    model?: string;
    /** 产品KEY */
    pk?: string;
    /** 产品类型 direct 直连 gateway 网关 child 子设备 */
    type?: string;
  };

  type thingProductListResp = {
    code?: number;
    msg?: string;
    items?: thingProduct[];
  };

  type thingProductPageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 产品名称 */
    name?: string;
    /** 产品型号 */
    model?: string;
    /** 产品KEY */
    pk?: string;
    /** 产品类型 direct 直连 gateway 网关 child 子设备 */
    type?: string;
  };

  type thingProductPageResp = {
    code?: number;
    msg?: string;
    total?: number;
    items?: thingProduct[];
  };

  type thingProductUpdateReq = {
    /** 产品id 创建为空 */
    id?: string;
    /** 产品名称 */
    name?: string;
    /** 产品型号 */
    model?: string;
    /** 物模型 */
    thing_def?: string;
    /** 描述 */
    desc?: string;
  };

  type thingProductUpdateResp = {
    code?: number;
    msg?: string;
    id?: string;
  };
}
