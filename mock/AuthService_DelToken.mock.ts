// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.DelToken': (req: Request, res: Response) => {
    res.status(200).send({ code: 99, msg: '青极法一果示京原教不响活美军。' });
  },
};
