// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 89,
      msg: '增等观一严周导器出支达报先。',
      id: 'BA5D3ef4-568C-bc4d-3C2D-dDE586E33366',
    });
  },
};
