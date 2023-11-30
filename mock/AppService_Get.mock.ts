// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 77,
      msg: '收基书量例毛界书路利厂严矿参料较总在。',
      App: {
        id: 'E57d85fD-D039-BA27-b687-f4A78248e3eA',
        code: '步知和革术设包广支流例整没。',
        name: '崔磊',
        describe: '再内所于场主构示表无及作数比叫。',
        create_user: '身中程方步见出位满品千把山议。',
        create_username: '利而反龙办数温式度拉把可科。',
        create_time: 'M@y1',
      },
    });
  },
};
