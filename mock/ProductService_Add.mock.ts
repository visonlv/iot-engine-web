// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 96,
      msg: '布新次矿向划高类样声例影。',
      id: 'EEd36773-8062-7F38-b5d1-72E512dA5578',
    });
  },
};
