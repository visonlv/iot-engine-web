// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 73,
      msg: '联思用取争线连离白这回法基。',
      id: 'E68D7ced-ae81-F3bC-bA0A-8B73D410bB72',
    });
  },
};
