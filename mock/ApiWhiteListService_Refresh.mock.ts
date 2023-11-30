// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Refresh': (req: Request, res: Response) => {
    res.status(200).send({ code: 66, msg: '命任与力热十信准向民什圆与交反。' });
  },
};
