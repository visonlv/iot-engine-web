// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 77,
      msg: '石传报题受花维接了它状受至情整习。',
      id: 'EDF132dE-FDFA-D83E-ac14-bbC3Ca8bf4e8',
    });
  },
};
