// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Auth': (req: Request, res: Response) => {
    res.status(200).send({
      code: 79,
      msg: '连来们厂区几可东难型备史表水分自出。',
      result: '开单克学该确县计中口真技结员照。',
      is_superuser: false,
    });
  },
};
