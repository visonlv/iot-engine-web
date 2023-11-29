// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.LoginByEmail': (req: Request, res: Response) => {
    res.status(200).send({
      code: 80,
      msg: '作象使育业管按历料成采难手点。',
      user_id: '71Df9c8f-FdfB-BECB-cbbA-4BE8CACB11C7',
      role_codes: ['直他是音就等建头去时同已里。'],
      token: '着子之在指们五参这话局通细划最题总力。',
    });
  },
};
