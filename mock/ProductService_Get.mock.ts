// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 81,
      msg: '员外水新际空老节快务义院件干。',
      item: {
        id: 'F3feDD44-5fE1-bC7c-Df42-77eCf9E0e1B9',
        name: '邹伟',
        model: '果压细际素被整近统值样单便实进那确华。',
        pk: '事往金难日叫低法度强员才机在员往。',
        transform: '打阶车党本该经江论八品那党也。',
        protocol: '地接世由然能厂专毛将建阶习。',
        type: 39,
        thing_def: '较示个太行次东看段名还间当据理。',
        desc: '接电积大类政求持水发式面至业。',
        create_time: 'm9@pD',
      },
    });
  },
};
