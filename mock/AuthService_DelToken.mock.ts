// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.DelToken': (req: Request, res: Response) => {
    res.status(200).send({ code: 98, msg: '离马利而都给型周情条无比影即际今。' });
  },
};
