// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 99,
      msg: '入约科老感片在音低二所合易社史。',
      App: {
        id: '4d7D0b1b-Ce79-E1f2-bDFD-e1C74579fEA6',
        code: '着最新存观红情局节区点叫加观验能第。',
        name: '白霞',
        describe: '复消知加公育期日才候样元解备。',
        create_user: '段导江代平方革金近运已十走理。',
        create_username: '科水关点斗装劳家相百究个着报次品还你。',
        create_time: 'ucAM&',
      },
    });
  },
};
