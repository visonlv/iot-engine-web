// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 72,
      msg: '观量元口比次治业可书必成数几又。',
      id: 'F6BEdC30-3a7A-67d6-8336-3e4357F74ceF',
    });
  },
};
