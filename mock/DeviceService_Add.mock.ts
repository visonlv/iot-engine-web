// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 74,
      msg: '改报酸热号电上西元回后斗周京学细。',
      id: '88A686A5-Eaa8-CbA2-40F7-79283Ab9E121',
    });
  },
};
