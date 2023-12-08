// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.LinkUserRoles': (req: Request, res: Response) => {
    res.status(200).send({ code: 100, msg: '信二历在系队量光列证现上物山。' });
  },
};
