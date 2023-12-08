// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 60,
      msg: '四因消好小统制改特记东加百太第。',
      item: {
        id: 'cb2D82ad-cF37-CBBB-9dDb-5275E4ADc1FF',
        pk: '热斗响活应器斯结论标应参素布亲成民。',
        name: '赵娟',
        sn: '个易离今什价红须变比专道本。',
        group: 99,
        secret: '党造原花构整原增如正物何林。',
        desc: '料式始京或包克海体先正他头适果连路。',
        create_time: 'CO$cpu',
      },
    });
  },
};
