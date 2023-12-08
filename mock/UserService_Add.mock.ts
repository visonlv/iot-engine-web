// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 90,
      msg: '华拉声场较确层转马识济连增各方住三。',
      id: 'D3616cd9-2D1b-BdeB-33aD-FBcc0aEEb9F4',
    });
  },
};
