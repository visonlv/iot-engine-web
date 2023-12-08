// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 100,
      msg: '道和交方划保且军华矿上真想要。',
      App: {
        id: '1416DdcE-14b2-8e17-4C5C-7FD8100aeDCe',
        code: '况长手月列共同信办自属光科科。',
        name: '韩超',
        describe: '认已认而华看马单五义南战选科革。',
        create_user: '持或省线战红局六王二流维现。',
        create_username: '和东口政写文样专类问构米及花深步。',
        create_time: 'qdgq@Z',
      },
    });
  },
};
