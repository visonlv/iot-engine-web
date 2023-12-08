// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.VerificationCode': (req: Request, res: Response) => {
    res.status(200).send({ code: 84, msg: '百五变再习信百名广质前问。' });
  },
};
