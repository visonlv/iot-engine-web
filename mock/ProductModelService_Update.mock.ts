// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 87,
      msg: '生效识什北成节理族四很何件。',
      id: '25FEc454-Fdb6-85D9-DCcE-C88bD6eDAEB1',
    });
  },
};
