// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.LinkUserRoles': (req: Request, res: Response) => {
    res.status(200).send({ code: 83, msg: '转下期界素商好即者任识照系党。' });
  },
};
