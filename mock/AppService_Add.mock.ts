// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 92,
      msg: '向造理争少增取群身线率想海天向广效。',
      id: '59DeCD2C-6e9d-A81c-Bf78-C4c8eA739D4A',
    });
  },
};
