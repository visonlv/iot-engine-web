export const APPCODE: string = 'IOT-ENGINE-WEB';
export const TOKENKEY: string = 'AuthToken';
export const PAGE_SIZE_MAX: number = 100000;

export const RESOURCE_TYPE_API = 'api';
export const RESOURCE_TYPE_MENU = 'menu';
export const RESOURCE_TYPE_RULE = 'rule';

export const RESOURCE_TYPE_VALUE = {
  [RESOURCE_TYPE_API]: { text: '接口' },
  [RESOURCE_TYPE_MENU]: { text: '菜单' },
  [RESOURCE_TYPE_RULE]: { text: '规则' },
};

export const RESOURCE_RULE_VALUE_OPTIONS = [{ value: 'bool', label: 'bool' }];

export const THING_DATA_TYPE = [
  { value: 'bool', label: 'bool' },
  { value: 'int', label: 'int' },
  { value: 'string', label: 'string' },
  { value: 'timestamp', label: 'timestamp' },
  { value: 'float', label: 'float' },
  { value: 'enum', label: 'enum' },
  { value: 'array', label: 'array' },
  { value: 'struct', label: 'struct' },
];

export const THING_PROPERTY_MODE = [
  { value: 'r', label: '只读' },
  { value: 'rw', label: '读写' },
];

export const THING_EVENT_TYPE = [
  { value: 'info', label: '信息' },
  { value: 'alert', label: '告警' },
  { value: 'fault', label: '故障' },
];

export const THING_SERVICE_DIR_TYPE = [
  { value: 'up', label: '上行调用' },
  { value: 'down', label: '下行调用' },
];

export const THING_PRODUCT_PROTOCAL = [
  { value: 'websocket', label: 'websocket' },
  { value: 'coap', label: 'coap' },
  { value: 'mqtt3', label: 'mqtt3' },
  { value: 'mqtt5', label: 'mqtt5' },
];

export const THING_PRODUCT_TYPE = [
  { value: 'direct', label: '直连设备' },
  { value: 'gateway', label: '网关' },
  { value: 'child', label: '子设备' },
];

export const THING_PRODUCT_TRANSFORM = [
  { value: 'model', label: '物模型' },
  { value: 'raw', label: '透传' },
];

export function convert2ValueEnum(list: { value: string; label: string }[]): {
  [key: string]: { text: string };
} {
  const m: { [key: string]: { text: string } } = {};
  for (let v of list) {
    m[v.value] = { text: v.label };
  }
  return m;
}
