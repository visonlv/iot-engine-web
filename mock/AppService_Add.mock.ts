// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 67,
      msg: '查声议理品际成水如门法始。',
      id: 'ccB7Cd22-4738-D2FB-B2fb-eEb5bEC3D181',
    });
  },
};
