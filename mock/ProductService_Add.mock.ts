// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 97,
      msg: '物从多命来将做级打到命求置之研问。',
      id: '4c8E8837-Ace6-cfcB-8558-DC4bcbE86C19',
    });
  },
};
