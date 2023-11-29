// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 99,
      msg: '须没列争连议可消认个备使见整保。',
      item: {
        id: 'C65B5d5D-87D8-cE39-beaa-39f7d212e95C',
        name: '赖平',
        type: 21,
        content: '作对已构商中斯们需少实战代。',
        property: '根种在代叫小增级容转算好。',
        parent_id: 'Ef36AfeE-85BD-f991-B930-Ee93Af352622',
        create_time: 'Ok&T',
        update_time: 'zzbLxN',
      },
    });
  },
};
