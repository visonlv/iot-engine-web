// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.GetMenu': (req: Request, res: Response) => {
    res.status(200).send({
      code: 71,
      msg: '总把已形整义存根百般平参活九办场。',
      menu: '六因共界半飞可西空传越界交保。',
    });
  },
};
