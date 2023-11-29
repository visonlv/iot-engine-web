// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.GenToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 67,
      msg: '法好点运区指对段十难变代需。',
      token: '选界革期不点复机水局成直产团。',
    });
  },
};
