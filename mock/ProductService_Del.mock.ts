// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 92,
      msg: '平改情号织传石准以影说业点。',
      id: 'BaCdcA3a-cfe7-8f01-F7D6-4bFf1BFfA58c',
    });
  },
};
