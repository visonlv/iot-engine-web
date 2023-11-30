// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Del': (req: Request, res: Response) => {
    res.status(200).send({ code: 97, msg: '向合认非门象结东生准是用。' });
  },
};
