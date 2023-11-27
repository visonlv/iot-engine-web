// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** API权限 POST /rpc/auth/AuthService.APIPermissions */
export async function authServiceApiPermissions(
  body: API.authAPIPermissionsReq,
  options?: { [key: string]: any },
) {
  return request<API.authAPIPermissionsResp>('/rpc/auth/AuthService.APIPermissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除token POST /rpc/auth/AuthService.DelToken */
export async function authServiceDelToken(
  body: API.authDelTokenReq,
  options?: { [key: string]: any },
) {
  return request<API.authDelTokenResp>('/rpc/auth/AuthService.DelToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 忘记密码 POST /rpc/auth/AuthService.ForgetPassword */
export async function authServiceForgetPassword(
  body: API.authForgetPasswordReq,
  options?: { [key: string]: any },
) {
  return request<API.authForgetPasswordResp>('/rpc/auth/AuthService.ForgetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 生成token POST /rpc/auth/AuthService.GenToken */
export async function authServiceGenToken(
  body: API.authGenTokenReq,
  options?: { [key: string]: any },
) {
  return request<API.authGenTokenResp>('/rpc/auth/AuthService.GenToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检测token POST /rpc/auth/AuthService.Inspect */
export async function authServiceInspect(
  body: API.authInspectReq,
  options?: { [key: string]: any },
) {
  return request<API.authInspectResp>('/rpc/auth/AuthService.Inspect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登录 POST /rpc/auth/AuthService.Login */
export async function authServiceLogin(body: API.authLoginReq, options?: { [key: string]: any }) {
  return request<API.authLoginResp>('/rpc/auth/AuthService.Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 邮箱登录 POST /rpc/auth/AuthService.LoginByEmail */
export async function authServiceLoginByEmail(
  body: API.authLoginByEmailReq,
  options?: { [key: string]: any },
) {
  return request<API.authLoginByEmailResp>('/rpc/auth/AuthService.LoginByEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 手机号登录 POST /rpc/auth/AuthService.LoginByPhone */
export async function authServiceLoginByPhone(
  body: API.authLoginByPhoneReq,
  options?: { [key: string]: any },
) {
  return request<API.authLoginByPhoneResp>('/rpc/auth/AuthService.LoginByPhone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出 POST /rpc/auth/AuthService.Logout */
export async function authServiceLogout(body: API.authLogoutReq, options?: { [key: string]: any }) {
  return request<API.authLogoutResp>('/rpc/auth/AuthService.Logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 刷新token POST /rpc/auth/AuthService.RefreshToken */
export async function authServiceRefreshToken(
  body: API.authRefreshTokenReq,
  options?: { [key: string]: any },
) {
  return request<API.authRefreshTokenResp>('/rpc/auth/AuthService.RefreshToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取验证码 POST /rpc/auth/AuthService.VerificationCode */
export async function authServiceVerificationCode(
  body: API.authVerificationCodeReq,
  options?: { [key: string]: any },
) {
  return request<API.authResponse>('/rpc/auth/AuthService.VerificationCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证密码 POST /rpc/auth/AuthService.VerifyPassword */
export async function authServiceVerifyPassword(
  body: API.authVerifyPasswordReq,
  options?: { [key: string]: any },
) {
  return request<API.authVerifyPasswordResp>('/rpc/auth/AuthService.VerifyPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
