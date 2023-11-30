// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 66,
      msg: '感电电经张区见面须新线率都住回建金。',
      item: {
        id: '7AEd5E85-1e2c-9e1a-F881-aA84F5Ad861a',
        role_id: 'fb6ff1f3-0345-f7DB-b220-0ffEAA21f526',
        role_name: '石叫原元论教队除想统了眼且确才器议。',
        app_id: '08ee8fAF-E1e5-1Cdd-FC1c-3a23ABc88CCF',
        app_name: '方满几把调今设周象酸部县较。',
        resource_type: 1,
        resources: '积眼音她光美关做边光意格花素战有置。',
        create_time: 'T[!6S]',
        resources_json: '间过天场题主际治样如龙自类。',
      },
    });
  },
};
