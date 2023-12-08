// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '己思华角达今再易也计治的备电利。',
      id: '1Fec2519-Db3E-9eC6-D3B5-413F3D5eEAFF',
    });
  },
};
