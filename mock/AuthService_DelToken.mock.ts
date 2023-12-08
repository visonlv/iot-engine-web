// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.DelToken': (req: Request, res: Response) => {
    res.status(200).send({ code: 78, msg: '规管段火况多全级万林关级置价准。' });
  },
};
