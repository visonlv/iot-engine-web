// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.Logout': (req: Request, res: Response) => {
    res.status(200).send({ code: 83, msg: '特个斗心意米么并务身结研活此。' });
  },
};
