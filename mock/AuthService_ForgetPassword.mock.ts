// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.ForgetPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 74, msg: '写老天年算型重老么平造严比都精意三。' });
  },
};
