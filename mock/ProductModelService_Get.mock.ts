// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 61,
      msg: '志约习和外下流导亲克组电组阶导国。',
      item: {
        id: '2dbb1D12-4Ef2-37d1-C3B5-CCeEBbDe9A34',
        name: '孙桂英',
        code: '该体压心所完参样际机结志认区组。',
        type: 45,
        model_def: '气适红车就因更置解三装办心门院省算。',
        desc: '使总力真口三铁家解清争团周市。',
        product_id: 'e1f2fACD-ceE0-751E-A4E9-14fD8bbBdAf8',
        create_time: 'zXuOda',
        is_sys: 'SJR',
      },
    });
  },
};
