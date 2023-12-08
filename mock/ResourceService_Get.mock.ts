// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 76,
      msg: '音革将步事水便安离方根制图传。',
      item: {
        id: '87769D83-A46B-FBf4-c4d1-8FcdfD6EFDCF',
        name: '袁霞',
        type: 21,
        content: '技风总利形东小质写准备日响况。',
        property: '先革技类决总积原县发江后正转主面或。',
        parent_id: 'B8035D59-36dB-BEE9-ae3e-ef1c6BDdE2fc',
        create_time: 'c6l@]P9',
        update_time: 'Ny&KXH',
      },
    });
  },
};
