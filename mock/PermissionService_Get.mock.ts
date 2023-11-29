// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 82,
      msg: '步专究备持离品方难书示里无。',
      item: {
        id: 'db4d9EDF-F43E-DFD5-0ce8-4be236d8c1D8',
        role_id: 'DE44d4AC-Fa66-DCd3-dA04-d2DcBBEAc8C6',
        role_name: '火解按六府小利存千是需二程。',
        app_id: 'A0F786D1-f2d1-6b89-cff4-97E5535ebB02',
        app_name: '市保选部个世年使走收始报她。',
        resource_type: 1,
        resources: '光组近存照研眼县局北品文压求儿历。',
        create_time: 'kL5d',
        resources_json: '土重六何千积斯县能九习被书党体。',
      },
    });
  },
};
