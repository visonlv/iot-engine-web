declare namespace API {
  type protoDevice = {
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

  type protoDeviceAddReq = {
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

  type protoDeviceAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type protoDeviceAuthReq = {
    username?: string;
    password?: string;
    /** 供应商  emqx */
    supplier?: string;
  };

  type protoDeviceAuthResp = {
    code?: number;
    msg?: string;
    result?: string;
    is_superuser?: boolean;
  };

  type protoDeviceDelReq = {
    /** 设备id */
    id?: string;
  };

  type protoDeviceDelResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type protoDeviceGetReq = {
    /** 设备id */
    id?: string;
  };

  type protoDeviceGetResp = {
    code?: number;
    msg?: string;
    item?: protoDevice;
  };

  type protoDeviceListReq = {
    /** 产品pk */
    pk?: string;
    /** 设备名称 */
    name?: string;
    /** 设备sn */
    sn?: string;
  };

  type protoDeviceListResp = {
    code?: number;
    msg?: string;
    items?: protoDevice[];
  };

  type protoDevicePageReq = {
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

  type protoDevicePageResp = {
    code?: number;
    msg?: string;
    total?: number;
    items?: protoDevice[];
  };

  type protoDevicePropertiesReq = {
    id?: string;
    property?: string;
  };

  type protoDevicePropertiesResp = {
    code?: number;
    msg?: string;
    id?: string;
    items?: protoDeviceProperty[];
  };

  type protoDeviceProperty = {
    code?: string;
    name?: string;
    desc?: string;
    type?: string;
    value?: string;
    update_time?: string;
  };

  type protoDeviceUpdateReq = {
    /** 设备id */
    id?: string;
    /** 设备名称 */
    name?: string;
    /** 设备秘钥 */
    secret?: string;
    /** 描述 */
    desc?: string;
  };

  type protoDeviceUpdateResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type protoProduct = {
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
    /** 描述 */
    desc?: string;
    /** 创建时间 */
    create_time?: string;
  };

  type protoProductAddReq = {
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
    /** 描述 */
    desc?: string;
  };

  type protoProductAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type protoProductDelReq = {
    /** 产品id */
    id?: string;
  };

  type protoProductDelResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type protoProductGetModelReq = {
    id?: string;
  };

  type protoProductGetModelResp = {
    code?: number;
    msg?: string;
    item?: protoProduct;
  };

  type protoProductGetReq = {
    /** 产品id */
    id?: string;
    pk?: string;
  };

  type protoProductGetResp = {
    code?: number;
    msg?: string;
    item?: protoProduct;
  };

  type protoProductListReq = {
    /** 产品名称 */
    name?: string;
    /** 产品型号 */
    model?: string;
    /** 产品KEY */
    pk?: string;
    /** 产品类型 direct 直连 gateway 网关 child 子设备 */
    type?: string;
    /** 是否加载物模型 */
    load_model_def?: boolean;
  };

  type protoProductListResp = {
    code?: number;
    msg?: string;
    items?: protoProduct[];
  };

  type protoProductModel = {
    /** 物模型id 创建为空 */
    id?: string;
    /** 物模型名称 */
    name?: string;
    /** 物模型标识 */
    code?: string;
    /** 定义类型 property event service */
    type?: string;
    /** 物模型 */
    model_def?: string;
    /** 描述 */
    desc?: string;
    /** 产品id */
    product_id?: string;
    /** 创建时间 */
    create_time?: string;
    /** 是否系统模型 1 是 0 否 */
    is_sys?: string;
  };

  type protoProductModelAddReq = {
    /** 物模型名称 */
    name?: string;
    /** 物模型标识 */
    code?: string;
    /** 定义类型 property event service */
    type?: string;
    /** 物模型 */
    model_def?: string;
    /** 产品id */
    product_id?: string;
    /** 描述 */
    desc?: string;
  };

  type protoProductModelAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type protoProductModelDelReq = {
    /** 物模型id */
    id?: string;
  };

  type protoProductModelDelResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type protoProductModelGetReq = {
    /** 物模型id */
    id?: string;
  };

  type protoProductModelGetResp = {
    code?: number;
    msg?: string;
    item?: protoProductModel;
  };

  type protoProductModelListReq = {
    /** 物模型名称 */
    name?: string;
    /** 物模型标识 */
    code?: string;
    /** 定义类型 property event service */
    type?: string;
    /** 产品id */
    product_id?: string;
  };

  type protoProductModelListResp = {
    code?: number;
    msg?: string;
    items?: protoProductModel[];
  };

  type protoProductModelPageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 物模型名称 */
    name?: string;
    /** 物模型标识 */
    code?: string;
    /** 定义类型 property event service */
    type?: string;
    /** 产品id */
    product_id?: string;
  };

  type protoProductModelPageResp = {
    code?: number;
    msg?: string;
    total?: number;
    items?: protoProductModel[];
  };

  type protoProductModelUpdateReq = {
    /** 物模型id 创建为空 */
    id?: string;
    /** 物模型名称 */
    name?: string;
    /** 物模型标识 */
    code?: string;
    /** 定义类型 property event service */
    type?: string;
    /** 物模型 */
    model_def?: string;
    /** 描述 */
    desc?: string;
  };

  type protoProductModelUpdateResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type protoProductPageReq = {
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

  type protoProductPageResp = {
    code?: number;
    msg?: string;
    total?: number;
    items?: protoProduct[];
  };

  type protoProductUpdateModelReq = {
    id?: string;
    thing_def?: string;
  };

  type protoProductUpdateModelResp = {
    code?: number;
    msg?: string;
    id?: string;
    thing_def?: string;
  };

  type protoProductUpdateReq = {
    /** 产品id 创建为空 */
    id?: string;
    /** 产品名称 */
    name?: string;
    /** 产品型号 */
    model?: string;
    /** 描述 */
    desc?: string;
  };

  type protoProductUpdateResp = {
    code?: number;
    msg?: string;
    id?: string;
  };
}
