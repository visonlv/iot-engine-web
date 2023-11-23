declare namespace API {
  type authAddResourceReq = {
    /** 资源名称 */
    name?: string;
    /** 资源类型 "api"-接口 "menu"-菜单 "rule"-规则 */
    type?: string;
    /** 资源内容 */
    content?: string;
  };

  type authAddResourceResp = {
    /** 返回码 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 资源ID */
    id?: string;
  };

  type authAPIPermissionsReq = {
    /** 用户ID */
    token?: string;
    /** api地址 */
    api?: string;
  };

  type authAPIPermissionsResp = {
    code?: number;
    msg?: string;
    /** 权限使能 */
    enable?: boolean;
    /** 用户id */
    user_id?: string;
    /** 角色标识 */
    role_codes?: string[];
    /** 应用标识 */
    app_code?: string;
    /** http状态 */
    http_status?: number;
    /** 是否是白名单 */
    is_white?: boolean;
  };

  type authApiWhiteList = {
    /** id */
    id?: string;
    /** 接口名称 */
    name?: string;
    /** 接口路径 */
    path?: string;
    /** 创建时间 */
    create_time?: string;
    /** 创建人 */
    create_username?: string;
  };

  type authApiWhiteListAddReq = {
    /** 接口名称 */
    name?: string;
    /** 接口地址 */
    path?: string;
  };

  type authApiWhiteListAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type authApiWhiteListDelReq = {
    id?: string;
  };

  type authApiWhiteListDelResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type authApiWhiteListPageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 接口名称 */
    name?: string;
  };

  type authApiWhiteListPageResp = {
    code?: number;
    msg?: string;
    total?: number;
    list?: authApiWhiteList[];
  };

  type authApiWhiteListRefreshReq = true;

  type authApiWhiteListRefreshResp = {
    code?: number;
    msg?: string;
  };

  type authApiWhiteListUpdateReq = {
    id?: string;
    /** 接口名称 */
    name?: string;
    /** 接口地址 */
    path?: string;
  };

  type authApiWhiteListUpdateResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type authApp = {
    /** 应用ID */
    id?: string;
    /** 应用标识 */
    code?: string;
    /** 应用名称 */
    name?: string;
    /** 应用描述 */
    describe?: string;
    /** 创建人 */
    create_user?: string;
    /** 创建人 */
    create_username?: string;
    /** 创建时间 */
    create_time?: string;
  };

  type authAppAddReq = {
    /** 应用标识 */
    code?: string;
    /** 应用名称 */
    name?: string;
    /** 应用描述 */
    describe?: string;
  };

  type authAppAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type authAppDelReq = {
    /** 应用id */
    id?: string;
  };

  type authAppDelResp = {
    code?: number;
    msg?: string;
  };

  type authAppGetReq = {
    /** 应用id */
    id?: string;
  };

  type authAppGetResp = {
    code?: number;
    msg?: string;
    App?: authApp;
  };

  type authAppPageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 应用名称 模糊查询 */
    name?: string;
  };

  type authAppPageResp = {
    code?: number;
    msg?: string;
    total?: number;
    list?: authApp[];
  };

  type authAppUpdateReq = {
    /** 应用id */
    id?: string;
    /** 应用名称 */
    name?: string;
    /** 应用标识 */
    code?: string;
    /** 应用描述 */
    describe?: string;
  };

  type authAppUpdateResp = {
    code?: number;
    msg?: string;
  };

  type authDelTokenReq = {
    /** 用户ID */
    user_id?: string;
    /** 用户角色 */
    role_code?: string;
    /** 应用code */
    app_code?: string;
    /** token */
    token?: string;
  };

  type authDelTokenResp = {
    code?: number;
    msg?: string;
  };

  type authForgetPasswordReq = {
    email?: string;
    verification_code?: string;
    password?: string;
  };

  type authForgetPasswordResp = {
    code?: number;
    msg?: string;
  };

  type authGenTokenReq = {
    /** 用户id */
    user_id?: string;
    /** 角色code */
    role_code?: string;
    /** 应用标识 */
    app_code?: string;
    /** token到期时间，单位：秒(非必填,默认七天) */
    expiry?: string;
  };

  type authGenTokenResp = {
    code?: number;
    msg?: string;
    /** 返回token */
    token?: string;
  };

  type authInspectReq = {
    /** token字符串 */
    token?: string;
  };

  type authInspectResp = {
    code?: number;
    msg?: string;
    /** 应用code */
    app_code?: string;
    /** 是否已存在 */
    is_exist?: boolean;
    user?: authUser;
  };

  type authLinkUserRolesReq = {
    /** 用户ID */
    user_id?: string;
    /** 角色标识列表 */
    role_codes?: string[];
  };

  type authLoginByEmailReq = {
    /** 用户邮箱 */
    email?: string;
    /** 验证码 */
    Password?: string;
    /** 应用code */
    app_code?: string;
    /** 角色 */
    role_code?: string;
    /** 账号过期时间，单位：秒(非必填,默认七天) */
    expiry?: string;
  };

  type authLoginByEmailResp = {
    code?: number;
    msg?: string;
    /** 用户id */
    user_id?: string;
    /** 角色标识 */
    role_codes?: string[];
    /** token */
    token?: string;
  };

  type authLoginByPhoneReq = {
    /** 用户手机号 */
    phone?: string;
    /** 验证码 */
    verify_code?: string;
    /** 应用code */
    app_code?: string;
    /** 角色 */
    role_code?: string;
    /** 账号过期时间，单位：秒(非必填,默认七天) */
    expiry?: string;
  };

  type authLoginByPhoneResp = {
    code?: number;
    msg?: string;
    /** 用户id */
    user_id?: string;
    /** 角色标识 */
    role_codes?: string[];
    /** token */
    token?: string;
  };

  type authLoginReq = {
    /** 用户名 */
    account?: string;
    /** 用户密码 */
    password?: string;
    /** 角色 */
    role_code?: string;
    /** 应用code */
    app_code?: string;
    /** 账号过期时间，单位：秒(非必填,默认七天) */
    expiry?: string;
  };

  type authLoginResp = {
    code?: number;
    msg?: string;
    /** 用户id */
    user_id?: string;
    /** 角色标识 */
    role_codes?: string[];
    /** token */
    token?: string;
  };

  type authLogoutReq = true;

  type authLogoutResp = {
    code?: number;
    msg?: string;
  };

  type authPermission = {
    id?: string;
    /** 角色id */
    role_id?: string;
    /** 角色名称 */
    role_name?: string;
    /** 应用id */
    app_id?: string;
    /** 应用名称 */
    app_name?: string;
    /** 资源类型  "api"-接口 "menu"-菜单 "rule"-规则 */
    resource_type?: string;
    /** 资源内容 json格式:[{"resource_id":"1","value":"xxx"}] */
    resources?: string;
    /** 创建时间 */
    create_time?: string;
    /** 资源展开的json内容 */
    resources_json?: string;
  };

  type authPermissionAddReq = {
    /** 角色id */
    role_id?: string;
    /** 应用id */
    app_id?: string;
    /** 资源类型  "api"-接口 "menu"-菜单 "rule"-规则 */
    resource_type?: string;
    /** 资源内容 json格式:[{"resource_id":"1","value":"xxx"}] */
    resources?: string;
  };

  type authPermissionAddResp = {
    code?: number;
    msg?: string;
    /** 权限id */
    id?: string;
  };

  type authPermissionDelReq = {
    /** 权限id */
    id?: string;
  };

  type authPermissionDelResp = {
    code?: number;
    msg?: string;
  };

  type authPermissionGetReq = {
    /** 权限id */
    id?: string;
  };

  type authPermissionGetResp = {
    code?: number;
    msg?: string;
    item?: authPermission;
  };

  type authPermissionPageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
  };

  type authPermissionPageResp = {
    code?: number;
    msg?: string;
    total?: number;
    list?: authPermission[];
  };

  type authPermissionUpdateReq = {
    /** 权限id */
    id?: string;
    /** 角色Id */
    role_id?: string;
    /** 应用id */
    app_id?: string;
    /** 资源内容 json格式:[{"resource_id":"1","value":"xxx"}] */
    resources?: string;
  };

  type authPermissionUpdateResp = {
    code?: number;
    msg?: string;
  };

  type authRefreshTokenReq = {
    token?: string;
  };

  type authRefreshTokenResp = {
    code?: number;
    msg?: string;
    /** token字符串 */
    token?: string;
  };

  type authRequest = {
    id?: string;
  };

  type authResource = {
    /** 资源ID */
    id?: string;
    /** 资源名称 */
    name?: string;
    /** 资源类型  "api"-接口 "menu"-菜单 "rule"-规则 */
    type?: string;
    /** 资源内容 */
    content?: string;
    /** 资源属性 */
    property?: string;
    /** 父级资源 */
    parent_id?: string;
    /** 创建时间 */
    create_time?: string;
    /** 更新时间 */
    update_time?: string;
  };

  type authResourceGetResp = {
    /** 返回码 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    item?: authResource;
  };

  type authResourcePageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 资源类型  "api"-接口 "menu"-菜单 "rule"-规则 */
    type?: string;
    /** 资源名称 模糊查询 */
    name?: string;
    /** 资源内容 模糊查询 */
    content?: string;
  };

  type authResourcePageResp = {
    code?: number;
    msg?: string;
    total?: number;
    list?: authResource[];
  };

  type authResourceRuleTypeReq = true;

  type authResourceRuleTypeResp = {
    code?: number;
    msg?: string;
    list?: string[];
  };

  type authResponse = {
    /** 返回码 */
    code?: number;
    /** 返回信息 */
    msg?: string;
  };

  type authRole = {
    /** 角色ID */
    id?: string;
    /** 角色标识 */
    code?: string;
    /** 角色名称 */
    name?: string;
    /** 创建人id */
    create_user?: string;
    /** 创建人 */
    create_username?: string;
    /** 创建时间 */
    create_time?: string;
  };

  type authRoleAddReq = {
    /** 角色标识 */
    code?: string;
    /** 角色名称 */
    name?: string;
  };

  type authRoleAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type authRoleDelReq = {
    /** 角色id */
    id?: string;
  };

  type authRoleDelResp = {
    code?: number;
    msg?: string;
  };

  type authRoleGetReq = {
    /** 角色id */
    id?: string;
  };

  type authRoleGetResp = {
    code?: number;
    msg?: string;
    role?: authRole;
  };

  type authRoleListByCodeReq = {
    /** 应用标识 */
    app_code?: string;
    /** 角色标识 */
    role_codes?: string[];
  };

  type authRoleListByCodeResp = {
    code?: number;
    msg?: string;
    items?: authRole[];
  };

  type authRoleListReq = {
    /** 应用标识 */
    app_code?: string;
  };

  type authRoleListResp = {
    code?: number;
    msg?: string;
    items?: authRole[];
  };

  type authRolePageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 角色名称 模糊查询 */
    name?: string;
  };

  type authRolePageResp = {
    code?: number;
    msg?: string;
    total?: number;
    list?: authRole[];
  };

  type authRoleUpdateReq = {
    /** 角色id */
    id?: string;
    /** 角色名称 */
    name?: string;
    /** 角色名称 */
    code?: string;
  };

  type authRoleUpdateResp = {
    code?: number;
    msg?: string;
  };

  type authUnlinkUserRolesReq = {
    /** 用户ID */
    user_id?: string;
    /** 角色标识列表 */
    role_codes?: string[];
  };

  type authUpdatePasswordReq = {
    /** 用户ID */
    user_id?: string;
    /** 当密码 */
    cur_password?: string;
    /** 新密码 */
    new_password?: string;
  };

  type authUpdatePasswordResp = {
    code?: number;
    msg?: string;
  };

  type authUpdateResourceReq = {
    /** 资源ID */
    id?: string;
    /** 资源名称 */
    name?: string;
    /** 资源内容 */
    content?: string;
  };

  type authUser = {
    /** 用户id */
    id?: string;
    /** 账号 */
    account?: string;
    /** 密码 */
    password?: string;
    /** 昵称 */
    nick_name?: string;
    /** 手机号 */
    phone?: string;
    /** 密码 */
    email?: string;
    /** 创建时间 */
    create_time?: string;
    /** 创建用户 */
    create_username?: string;
    /** 创建用户Id */
    create_user?: string;
    /** 角色标识 */
    role_code?: string[];
  };

  type authUserAddReq = {
    item?: authUser;
    /** 应用标识 */
    app_code?: string;
  };

  type authUserAddResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type authUserDelReq = {
    /** 用户id */
    id?: string;
    /** 应用CODE，不为空时清理该用户在该应用下的角色 */
    app_code?: string;
  };

  type authUserDelResp = {
    code?: number;
    msg?: string;
  };

  type authUserGetReq = {
    /** 用户id */
    id?: string;
    /** 应用标识 */
    app_code?: string;
  };

  type authUserGetResp = {
    code?: number;
    msg?: string;
    item?: authUser;
  };

  type authUserPageBySqlReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 排序 */
    order_key?: string;
    /** 排序方式:升序false(默认)|降序true */
    desc?: boolean;
    /** 筛选条件 account like %%张%% and user_id in not ("1") */
    filter?: string;
    /** 应用标识 */
    app_code?: string;
  };

  type authUserPageBySqlResp = {
    code?: number;
    msg?: string;
    total?: number;
    list?: authUser[];
  };

  type authUserPageReq = {
    /** 第几页，从1开始 */
    page_index?: number;
    /** 每页多少条 */
    page_size?: number;
    /** 排序 */
    order_key?: string;
    /** 排序方式:升序false(默认)|降序true */
    desc?: boolean;
    /** 应用code */
    app_code?: string;
    /** 账户名 */
    account?: string;
    /** 昵称 */
    nick_name?: string;
    /** 手机号 */
    phone?: string;
    /** 密码 */
    email?: string;
    /** 创建人 */
    create_user?: string;
    /** 角色 */
    role_codes?: string[];
  };

  type authUserPageResp = {
    code?: number;
    msg?: string;
    total?: number;
    list?: authUser[];
  };

  type authUserUpdateReq = {
    Item?: authUser;
    /** 应用标识 */
    app_code?: string;
  };

  type authUserUpdateResp = {
    code?: number;
    msg?: string;
    id?: string;
  };

  type authVerificationCodeReq = {
    /** 发送对象 */
    object?: string;
    /** 验证方式 1-手机 2-邮箱 */
    method?: number;
    /** 应用code */
    app_code?: string;
  };

  type authVerifyPasswordReq = {
    user_id?: string;
    password?: string;
  };

  type authVerifyPasswordResp = {
    code?: number;
    msg?: string;
  };

  type protobufAny = {
    type_url?: string;
    value?: string;
  };

  type runtimeError = {
    error?: string;
    code?: number;
    message?: string;
    details?: protobufAny[];
  };
}
