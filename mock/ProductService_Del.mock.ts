// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 64,
      msg: '置同般查各过转往提热效会权。',
      id: 'e0D82A1d-bC4D-179e-7Fb5-871ecC8DfeAC',
    });
  },
};
