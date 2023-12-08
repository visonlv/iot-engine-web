// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 64,
      msg: '同济手很结记教那约里马志备劳。',
      id: 'DD1314f1-79E8-Fb69-8AA7-074522EfEC5D',
    });
  },
};
