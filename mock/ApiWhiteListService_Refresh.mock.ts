// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Refresh': (req: Request, res: Response) => {
    res.status(200).send({ code: 96, msg: '领干青基指由出写阶选条共立米走品公。' });
  },
};
