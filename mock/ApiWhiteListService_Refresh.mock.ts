// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Refresh': (req: Request, res: Response) => {
    res.status(200).send({ code: 91, msg: '许出体光调理装展质间律得化。' });
  },
};
