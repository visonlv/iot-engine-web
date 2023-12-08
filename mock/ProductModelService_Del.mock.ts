// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 89,
      msg: '国离格会住目候身要使果金收期清。',
      id: 'f8AeADfC-eEFe-36fd-10a7-b7DeF827EFc6',
    });
  },
};
