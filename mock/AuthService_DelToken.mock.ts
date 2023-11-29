// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.DelToken': (req: Request, res: Response) => {
    res.status(200).send({ code: 78, msg: '类已信点究和头为步响存过全提中造示。' });
  },
};
