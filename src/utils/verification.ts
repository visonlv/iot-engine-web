export const TEXTAREA_LEN = 200;
export const NAME_LEN = 32;

export const patternPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{8,32}$/;

export const passwordFormatTips = '密码必须包含字母和数字，长度在8-32位之间';

export const isPassword = (password: string) => {
  return patternPassword.test(password);
};
