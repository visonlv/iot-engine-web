// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Del': (req: Request, res: Response) => {
    res.status(200).send({ code: 61, msg: '市运准节线总收江铁发持示品加须带向手。' });
  },
};
