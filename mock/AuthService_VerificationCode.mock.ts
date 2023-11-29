// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerificationCode': (req: Request, res: Response) => {
    res.status(200).send({ code: 98, msg: '美历可前件却想一他和张叫向。' });
  },
};
