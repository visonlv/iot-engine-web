// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerifyPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 88, msg: '称级导华导养划队律文际料须难严才场得。' });
  },
};
