// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/RoleService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 65,
      msg: '风值运点住强亲领方义斗斗儿例飞。',
      id: '7cbE9A4C-E39B-6982-f2DB-fb05137A6B64',
    });
  },
};
