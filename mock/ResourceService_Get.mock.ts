// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 82,
      msg: '切道全立多出求思元产其上查五。',
      item: {
        id: 'FBCB66E2-4e6B-2EC9-efD2-7b8B39BdfcC1',
        name: '田超',
        type: 13,
        content: '家布六见率表华便并代技接而意及传。',
        property: '示从海定生资持走亲精影身。',
        parent_id: 'dDEB94B8-9ED8-fB8B-83BD-A7BfEfAb4deF',
        create_time: 'bi)Os',
        update_time: 'R$An',
      },
    });
  },
};
