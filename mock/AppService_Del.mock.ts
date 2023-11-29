// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Del': (req: Request, res: Response) => {
    res.status(200).send({ code: 97, msg: '手去研科代声分装下可样直交战。' });
  },
};
