// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 95,
      msg: '形军然看适小深八与加对安角。',
      id: 'e31b8b7f-F8F2-AB7A-ADdB-cb5A8f2b17aF',
    });
  },
};
