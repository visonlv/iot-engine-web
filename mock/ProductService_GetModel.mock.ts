// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.GetModel': (req: Request, res: Response) => {
    res.status(200).send({
      code: 87,
      msg: '定半党红导太便标质面包应压层。',
      item: {
        id: 'CEC6E075-2db3-eCEE-05F5-4b2fA5Ec82EA',
        name: '魏磊',
        model: '正种光米儿会需叫经易今型战称。',
        pk: '解和接难多色决圆向外属备周斗中的。',
        transform: '火京物什观利准东流得别做所。',
        protocol: '九量改看被通那龙样列上已克多五对大。',
        type: 69,
        thing_def: '确西江响同非周级保他因需重水织或写。',
        desc: '度周制理理九此头命信认音将知。',
        create_time: 'UIS',
      },
    });
  },
};
