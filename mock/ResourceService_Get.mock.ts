// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 79,
      msg: '么通复拉等准便农法界观声非元马光代。',
      item: {
        id: 'Af16d641-A46F-bfce-fd6d-984B2BcDd7D1',
        name: '吕洋',
        type: 2,
        content: '采叫称研照专表到眼本广织。',
        property: '自重用史明象东第得农复圆况。',
        parent_id: 'Eb041D6C-8e54-A45b-85D9-c0B8e9bf2d63',
        create_time: 'sm#ive',
        update_time: 'DkciC',
      },
    });
  },
};
