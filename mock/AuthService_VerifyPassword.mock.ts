// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerifyPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 90, msg: '界细结先价内要件于确越再很关性该切。' });
  },
};
