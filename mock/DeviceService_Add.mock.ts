// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 72,
      msg: '率王一节支几引压专期起出造声起。',
      id: 'beEf5eAf-bf68-aF8A-B989-6A2D437CfBFA',
    });
  },
};
