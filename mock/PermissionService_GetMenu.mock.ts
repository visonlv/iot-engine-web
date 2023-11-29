// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.GetMenu': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '维九严候领何认线开由示头世报。',
      menu: '厂并须我先位位世解叫百红过族斗也土往。',
    });
  },
};
