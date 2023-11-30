// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '共电容马七八质就六温老文回。',
      id: '8525b8cB-4d7b-77D1-31bD-AdC21eD7A180',
    });
  },
};
