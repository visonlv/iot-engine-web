// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 92,
      msg: '质价到量场形验声同劳严支以参。',
      id: '9FB568dd-8ef0-2E25-efEE-A0E44f136034',
    });
  },
};
