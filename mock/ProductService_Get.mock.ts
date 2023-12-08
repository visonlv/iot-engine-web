// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 90,
      msg: '片明龙少育铁外增工打集运证风声管。',
      item: {
        id: '11C1A987-3bEC-Fd33-Ad4f-19e17c249e1f',
        name: '曾芳',
        model: '话条江铁决月么小党务较说断活回。',
        pk: '明其象信发片院车际着增土。',
        transform: '才种选系东更例容争究准行利技。',
        protocol: '见系造改长整式金体集本最关。',
        type: 56,
        thing_def: '史问联心万级此置管并意么别设长。',
        desc: '个间样认政组到农影很决证华断会特劳。',
        create_time: 'EnM1M1T',
      },
    });
  },
};
