// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.GenToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 91,
      msg: '养西也保层为团水容可反青争面状克复。',
      token: '日水置持观电情生能学北验各精。',
    });
  },
};
