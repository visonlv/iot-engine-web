// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '点高提新内才往调适局面个转走向事级。',
      item: {
        id: 'Fb4251B7-46D9-cEfd-1F65-5cC215ad816d',
        name: '谢霞',
        code: '同起无们光快立际求世广对般。',
        type: 31,
        model_def: '五水和必治中队号族公住土快义工思原质。',
        desc: '分族究和利口进织通划地红市战。',
        product_id: 'dF4cbBC6-fBC2-AB77-d8aA-dc92B63b2C68',
        create_time: 'Nefx#kn',
        is_sys: 'r6f5$C',
      },
    });
  },
};
