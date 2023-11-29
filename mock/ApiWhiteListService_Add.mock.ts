// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 68,
      msg: '开光电根往学他写支想众精制没报。',
      id: '02feEDEe-cf0f-9Cc4-cc29-8815e66B6E4c',
    });
  },
};
