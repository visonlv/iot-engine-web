// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerificationCode': (req: Request, res: Response) => {
    res.status(200).send({ code: 71, msg: '低要公目你明组元还定委二自省列料。' });
  },
};
