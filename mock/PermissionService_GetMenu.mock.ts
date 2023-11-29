// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.GetMenu': (req: Request, res: Response) => {
    res.status(200).send({
      code: 98,
      msg: '员发生据还得素界容光论口。',
      menu: '接元她起过称使表资三热示线党作学条。',
    });
  },
};
