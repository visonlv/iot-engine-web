// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.LinkUserRoles': (req: Request, res: Response) => {
    res.status(200).send({ code: 66, msg: '教相商劳阶志容选前党级型周共标。' });
  },
};
