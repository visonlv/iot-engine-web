import { Footer } from '@/components';
import { authServiceLogin } from '@/services/swagger/authService';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { FormattedMessage, history, useIntl, useModel, Helmet } from '@umijs/max';
import { Alert, message } from 'antd';
import Settings from '../../../../config/defaultSettings';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import { MD5 } from 'crypto-js';
import { isPassword, passwordFormatTips } from '@/utils/verification';
import { setLoginResult } from '@/utils/store';

export const getPassword = (value: any) => MD5(value).toString();

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
        marginTop: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.authLoginResp>({});
  const { initialState, setInitialState } = useModel('@@initialState');

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const checkPassword = (password: string) => {
    if (!password) {
      return '请输入密码';
    }
    if (!isPassword(password)) {
      return passwordFormatTips;
    }
    return true;
  };

  const checkAccount = (account: string) => {
    if (!account) {
      return '请输入账号';
    }
    return true;
  };

  const handleSubmit = async (values: API.authLoginReq) => {
    try {
      const account = values.account as string;
      const password = values.password as string;
      const passwordErr = checkPassword(password);
      if (!passwordErr) {
        message.error(passwordErr);
        return;
      }

      const accountErr = checkAccount(account);
      if (!accountErr) {
        message.error(accountErr);
        return;
      }

      values.password = getPassword(values.password as string);
      // 登录
      const msg = (await authServiceLogin({ ...values })) as any;
      console.log(msg);
      if (msg.code === 0) {
        message.success('登录成功！');
        //存储token信息
        setLoginResult(msg?.token as string, msg?.user_id as string);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      console.log('登陆失败', error);
    }
  };

  const loginCode = userLoginState.code;
  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'登录页'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '2',
          padding: '200px 20px',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 350,
            maxWidth: '75vw',
          }}
          title="用户登陆"
          initialValues={{
            autoLogin: false,
          }}
          onFinish={async (values) => {
            const req: API.authLoginReq = {
              account: values.username,
              password: values.password,
              role_code: 'ADMIN',
              app_code: 'IOT-ENGINE-WEB',
            };
            await handleSubmit(req);
          }}
        >
          {loginCode !== 0 && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误',
              })}
            />
          )}

          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: '用户名: admin or user',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="请输入用户名!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '密码',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />
          </>
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
