// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 88,
      msg: '区做水定斯到影到民单都族务部所整。',
      item: {
        id: 'B7Cb2132-BFc4-ab58-ce71-c8fCdcA05D7A',
        name: '谭敏',
        type: 18,
        content: '半前养术专为声与国调例有全。',
        property: '拉济头被理你把化品联分那做下先便九。',
        parent_id: 'AB896E43-c4E5-23E7-Cd7C-BfeeCc72Fad8',
        create_time: 'n!&IG',
        update_time: '4KKg',
      },
    });
  },
};
