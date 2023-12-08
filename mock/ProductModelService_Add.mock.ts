// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 96,
      msg: '律记外间更权里己外义日院组列将。',
      id: 'A4bD93C7-63f6-0F64-7a0e-fCB04626F8a1',
    });
  },
};
