// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.GenToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 82,
      msg: '政造交点车手年调划已值往确程如品。',
      token: '导办到果拉见毛者张百况开广明。',
    });
  },
};
