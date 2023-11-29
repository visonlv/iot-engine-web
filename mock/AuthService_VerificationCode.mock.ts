// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerificationCode': (req: Request, res: Response) => {
    res.status(200).send({ code: 95, msg: '保被制低照加自安口计治广说技去平。' });
  },
};
