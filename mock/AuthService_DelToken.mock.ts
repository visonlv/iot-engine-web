// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.DelToken': (req: Request, res: Response) => {
    res.status(200).send({ code: 68, msg: '元在每受团集领农些置你料律基论且理。' });
  },
};
