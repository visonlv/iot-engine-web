// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.RefreshToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 70,
      msg: '律外好别新只速政上证组采。',
      token: '集改按约产识表比始世设根复使声们快式。',
    });
  },
};
