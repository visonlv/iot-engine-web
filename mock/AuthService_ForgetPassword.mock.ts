// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.ForgetPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 84, msg: '反习时近工级清员她本更内为上。' });
  },
};
