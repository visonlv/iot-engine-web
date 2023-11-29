// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 80,
      msg: '议包结群火为知战安不历中线认集。',
      id: 'bCb1A27F-264C-e8e4-0f32-E9E6Ed925D63',
    });
  },
};
