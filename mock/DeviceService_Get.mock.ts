// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 83,
      msg: '图场年满利义声样例世发标片进。',
      item: {
        id: 'CC3E8f6E-4F2F-7243-e440-B9F1Fdd2Bdf1',
        pk: '队事该元机系家共风改军是民观名。',
        name: '曹洋',
        sn: '离得治来组但接条时发美设数。',
        group: 72,
        secret: '因石图万本严论等质带参带日在院整。',
        desc: '无公治广由化身此内九团节时他。',
        create_time: 'ts&',
      },
    });
  },
};
