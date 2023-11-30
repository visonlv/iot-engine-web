// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerificationCode': (req: Request, res: Response) => {
    res.status(200).send({ code: 82, msg: '内县主里内回术所叫增义也布意。' });
  },
};
