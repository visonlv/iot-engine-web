// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 84,
      msg: '报备别元象听看切月书斯实料速有。',
      id: '913114C7-1fBC-734c-484b-313c97eE5a32',
    });
  },
};
