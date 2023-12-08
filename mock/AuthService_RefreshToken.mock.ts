// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.RefreshToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 80,
      msg: '务七来变小县回全打先积下提么度量。',
      token: '最铁且技运根百风很车很说基也。',
    });
  },
};
