// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.GetMenu': (req: Request, res: Response) => {
    res.status(200).send({
      code: 93,
      msg: '成级经区格术才接定争年究一值到设则。',
      menu: '即意共这没十置特个适月发飞。',
    });
  },
};
