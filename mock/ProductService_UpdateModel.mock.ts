// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.UpdateModel': (req: Request, res: Response) => {
    res.status(200).send({
      code: 74,
      msg: '象员青往周效四根究保先厂化油题深加。',
      id: 'C53eBE51-FAfd-5F4b-4f5b-256E6F19fd8f',
      thing_def: '斯选业度亲开革按五青都进革非同型。',
    });
  },
};
