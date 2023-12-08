// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '边比才花长听采况局龙样成场。',
      item: {
        id: 'CEfddEC6-C2dB-5e29-dcaf-2eEAd8fbA5ED',
        name: '杨静',
        type: 18,
        content: '这院京术新情权点长系精比必。',
        property: '派清易用象海想想因装该确化。',
        parent_id: 'E63b22d7-59dE-58C2-D24f-b7f09cDEeCa5',
        create_time: 'bJQtyS',
        update_time: '&1$G',
      },
    });
  },
};
