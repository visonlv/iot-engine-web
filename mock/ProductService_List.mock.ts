// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.List': (req: Request, res: Response) => {
    res.status(200).send({ code: 89, msg: '别向车品时油体严公思土太机使。', items: [] });
  },
};
