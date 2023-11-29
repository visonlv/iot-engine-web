// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.RefreshToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 96,
      msg: '天们非东入给计着六万象去党无。',
      token: '矿该小对存江前正成周组军需表。',
    });
  },
};
