// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 100,
      msg: '主生海部如备四下满群二列最期。',
      id: 'd381F688-CCAd-553f-246f-62f56F6D8f14',
    });
  },
};
