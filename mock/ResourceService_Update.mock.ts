// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Update': (req: Request, res: Response) => {
    res.status(200).send({ code: 61, msg: '对不联值决目资取按保算同路题成。' });
  },
};
