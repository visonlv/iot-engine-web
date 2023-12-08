// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.RefreshToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 99,
      msg: '光据主信前然量场江况行那应。',
      token: '干矿有认反西越决名流线题习严分新族军。',
    });
  },
};
