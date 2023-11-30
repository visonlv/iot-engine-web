// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Auth': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '可只飞消维带就表特老会象步化二解动。',
      result: '任后改书教员天厂军素快还片适干证克。',
      is_superuser: true,
    });
  },
};
