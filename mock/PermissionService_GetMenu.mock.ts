// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.GetMenu': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '指低属般适此得更眼红走按标。',
      menu: '段路造有着子利土解民验重建心党决。',
    });
  },
};
