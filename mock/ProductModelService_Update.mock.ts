// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 64,
      msg: '府利提又院育前最属社制几适那。',
      id: '0daBE94d-dbF2-1d4E-8F34-09EFbE8ff32d',
    });
  },
};
