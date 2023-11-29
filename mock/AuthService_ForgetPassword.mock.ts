// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.ForgetPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 95, msg: '观前系利运类江科里往较后做重构公。' });
  },
};
