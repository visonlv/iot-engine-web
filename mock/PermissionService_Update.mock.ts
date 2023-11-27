// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Update': (req: Request, res: Response) => {
    res.status(200).send({ code: 91, msg: '听证对青边小住须示技线声东养。' });
  },
};
