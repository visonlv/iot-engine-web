// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.Logout': (req: Request, res: Response) => {
    res.status(200).send({ code: 62, msg: '必省原究专行精选科响几着例列子半。' });
  },
};
