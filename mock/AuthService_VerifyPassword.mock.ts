// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerifyPassword': (req: Request, res: Response) => {
    res.status(200).send({ code: 85, msg: '目速但安众查很少许取给类青。' });
  },
};
