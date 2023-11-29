// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerifyPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 70, msg: '际程设亲际家该统开无自便石定验较员。' });
  },
};
