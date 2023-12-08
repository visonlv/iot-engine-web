// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Refresh': (req: Request, res: Response) => {
    res.status(200).send({ code: 89, msg: '计节命放种解时实今见意决手金后公立。' });
  },
};
