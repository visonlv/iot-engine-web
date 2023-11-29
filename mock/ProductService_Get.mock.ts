// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 62,
      msg: '拉满科原照包常儿头老消马边际和观。',
      item: {
        id: 'fA70bF2f-dCDe-Ba79-4CC9-8AD19D1cd886',
        name: '贺明',
        model: '元格线头引省亲质形快细切我。',
        pk: '为千气种王报不教传和构一深六便太。',
        transform: '真等族感打运九去白资平音确动油龙构。',
        protocol: '口类元响则同见度习确保区白上他别。',
        type: 33,
        thing_def: '打里且道务只到即水定使最。',
        thing_def_version: 'siU$3',
        desc: '始民提间次件题之算山划之六除被问县适。',
        create_time: 'Ki3[]',
      },
    });
  },
};
