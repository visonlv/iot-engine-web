// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Update': (req: Request, res: Response) => {
    res.status(200).send({ code: 99, msg: '常比最风九直写什干关要整展。' });
  },
};
