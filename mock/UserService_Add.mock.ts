// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 86,
      msg: '住己去度等流年次立象写比已采识。',
      id: 'AFE4eFCF-DBEE-BacB-bcbE-2DE7Ffc4D84e',
    });
  },
};
