// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 96,
      msg: '天青命身正或热五头单影明列。',
      id: '7A1297F0-c395-D2d6-7676-B92e7aa4C4c4',
    });
  },
};
