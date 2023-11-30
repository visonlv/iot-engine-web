// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 84,
      msg: '式立金交基示色便验种年建从江车重。',
      id: '35D3b7DB-a4E3-DC35-d9Ff-931B0A51fCf3',
    });
  },
};
