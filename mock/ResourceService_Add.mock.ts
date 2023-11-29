// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '飞八北半关飞别据京活期工议带。',
      id: '861C6fe9-8D9e-12A0-3B6B-60bb64c571De',
    });
  },
};
