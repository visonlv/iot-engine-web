// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Auth': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '广划头格于军史教的导发车度根。',
      result: '北当认们示器自史易拉青看战常。',
      is_superuser: false,
    });
  },
};
