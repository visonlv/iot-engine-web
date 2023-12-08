// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 74,
      msg: '劳算风四眼们对由织声少红满北将究的精。',
      id: 'fef7CAfb-D6F4-1645-82F8-7FF5BDede5b7',
    });
  },
};
