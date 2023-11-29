// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 71,
      msg: '素等易开党多且期律省研律手心须对级。',
      id: 'Ad7dDdfA-Ffa3-38bb-7eeA-f2B47DDd5f8e',
    });
  },
};
