// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 62,
      msg: '叫值业取石度并后深天合安七劳使由究。',
      id: 'FDC1c367-DB3d-BccA-19BA-fd0cB90C93dE',
    });
  },
};
