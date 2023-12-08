// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 89,
      msg: '处设直马斯例按前例金十根车活。',
      id: '8BF20141-eBF7-Fc29-9dDC-E772EDBCacD4',
    });
  },
};
