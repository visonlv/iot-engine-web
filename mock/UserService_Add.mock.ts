// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '积党易合万它民下调须意铁示龙收这。',
      id: 'cCCdc683-36Fd-AbdD-AC4b-a1FFB1c664ca',
    });
  },
};
