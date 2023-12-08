// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.GenToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 64,
      msg: '米报整通内革出状数联产者空划线。',
      token: '类共记力果广后机带结期及连派千素两量。',
    });
  },
};
