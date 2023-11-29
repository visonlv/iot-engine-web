// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.Logout': (req: Request, res: Response) => {
    res.status(200).send({ code: 84, msg: '酸直革快济学然段系火织查全率支合。' });
  },
};
