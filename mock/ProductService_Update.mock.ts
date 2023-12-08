// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 62,
      msg: '过度十系重起走接清线从看理志红为无族。',
      id: '373AA98d-e5A3-6FAB-02d2-79CcBb7e77f1',
    });
  },
};
