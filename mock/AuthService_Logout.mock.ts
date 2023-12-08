// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.Logout': (req: Request, res: Response) => {
    res.status(200).send({ code: 72, msg: '影地住之利主那何说该时形争量。' });
  },
};
