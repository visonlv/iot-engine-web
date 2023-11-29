// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerifyPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 100, msg: '道起整林参象其工了义养切不开过际众月。' });
  },
};
