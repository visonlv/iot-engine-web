// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.GenToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 91,
      msg: '必共时部选须走条深长经际。',
      token: '平民群业基离图则须民改调况四历术族发。',
    });
  },
};
