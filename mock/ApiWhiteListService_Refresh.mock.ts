// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Refresh': (req: Request, res: Response) => {
    res.status(200).send({ code: 60, msg: '复改主有称飞发通你装派改造大式美。' });
  },
};
