// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.ForgetPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 62, msg: '团建族清压满今表技任验车构。' });
  },
};
