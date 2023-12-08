// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Auth': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '区成主解快节用次此决技亲。',
      result: '事得府这上省联公技门次号达别改。',
      is_superuser: false,
    });
  },
};
