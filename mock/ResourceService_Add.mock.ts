// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '持容基参二并将参圆群南决设千。',
      id: '643fEFa1-C7fD-A2E9-9fcc-C75d7f54b6c5',
    });
  },
};
