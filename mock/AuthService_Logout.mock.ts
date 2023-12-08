// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.Logout': (req: Request, res: Response) => {
    res.status(200).send({ code: 86, msg: '利存此感证界得志东义中其理式。' });
  },
};
