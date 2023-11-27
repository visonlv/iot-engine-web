// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 92,
      msg: '和成增见往治影资维约题元明路族验。',
      item: {
        id: 'dbA3Fc2a-FEDE-BdDC-fe8D-FF40f8cFA4De',
        role_id: 'e26c46D3-ACfF-38d2-427A-2eBF8FcDEc08',
        role_name: '率那识写并专论由引验实支走再共回圆近。',
        app_id: '5bac15F5-2659-b9Ac-38f9-dc41da4BacFe',
        app_name: '高备后流斗他示复七数教点。',
        resource_type: 1,
        resources: '提史国工别属合强合查素断时要。',
        create_time: 'H[ZHY1',
        resources_json: '权转米花体带例府里法们单最济复影火。',
      },
    });
  },
};
