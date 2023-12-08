// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '须法切气克元电命志火名第。',
      id: '97Fd48d7-1459-F1F5-05F4-cB3CDA6AFF7c',
    });
  },
};
