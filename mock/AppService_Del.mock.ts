// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Del': (req: Request, res: Response) => {
    res.status(200).send({ code: 81, msg: '变层资任人好而究自调工非。' });
  },
};
