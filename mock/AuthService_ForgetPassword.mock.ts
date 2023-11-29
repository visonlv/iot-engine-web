// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.ForgetPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 81, msg: '反技酸少受规五东思义周则农采。' });
  },
};
