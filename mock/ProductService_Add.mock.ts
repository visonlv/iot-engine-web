// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 78,
      msg: '飞备还有全厂接建记头酸张使任称党用。',
      id: 'CE4EFE7F-96a4-5dDF-94fc-FdFA6bbA9A44',
    });
  },
};
