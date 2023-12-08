// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/RoleService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 76,
      msg: '加七其所亲消成率式油备二土重统济众。',
      role: {
        id: 'c9408Bd3-9E3F-fF52-EEeC-9c53f427c3e7',
        code: '素众效命今层叫千务实度县经等上据种。',
        name: '程丽',
        create_user: '土支地中那见造装除比看者。',
        create_username: '收般列义提已列来社王出你人。',
        create_time: 'mJwer',
      },
    });
  },
};
