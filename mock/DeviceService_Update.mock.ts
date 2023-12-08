// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 94,
      msg: '收红候及思品区参务意族比转。',
      id: 'b8Ce876a-dc6e-FC61-168b-2E4FA413EDBE',
    });
  },
};
