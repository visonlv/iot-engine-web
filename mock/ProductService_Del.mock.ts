// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 69,
      msg: '理先包亲术领间些规者精研导力。',
      id: 'fc3DB3Bc-4BC9-9FA6-F232-eae166eCa94e',
    });
  },
};
