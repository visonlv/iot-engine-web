// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 70,
      msg: '军单传克级元部农去表要酸很上。',
      id: 'aed5eeC7-7FdD-4a48-Dffb-B36A042Bf753',
    });
  },
};
