// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 88,
      msg: '飞制价期产育阶龙者低件分多于严况。',
      item: {
        id: 'A27C3cf3-f1Ec-3Eea-eE2c-b6A45aa95D82',
        name: '宋霞',
        code: '要验文行越满图求再增单应。',
        type: 18,
        model_def: '头常建程按离少小合完存工果例类。',
        desc: '光平外写今算历包术之厂候要。',
        product_id: 'B5eBb247-BBcC-856F-fCAd-943cd28FAbEA',
        create_time: 'LKs',
        is_sys: 'xwSjZ#N',
      },
    });
  },
};
