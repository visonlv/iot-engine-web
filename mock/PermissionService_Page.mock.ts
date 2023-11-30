// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Page': (req: Request, res: Response) => {
    res.status(200).send({ code: 86, msg: '中位织东多作斗西给委如容。', total: 73, list: [] });
  },
};
