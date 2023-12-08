// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.GenToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 97,
      msg: '结现界走但九中话越准半维部音么因龙。',
      token: '确革规他从建成型拉产与性色成水龙得。',
    });
  },
};
