// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '以际生因气压问类话本志起维决年离离际。',
      item: {
        id: '0Eacf72C-08F6-b705-9e24-132d12638944',
        pk: '小引开提除支论较火被却系土想类有。',
        name: '熊磊',
        sn: '共立效采长拉表由再称统所安却。',
        group: 80,
        secret: '美商团或约水近养明究需专。',
        desc: '山所身务改油规县车于学五学不育究存进。',
        create_time: 'Liq4',
      },
    });
  },
};
