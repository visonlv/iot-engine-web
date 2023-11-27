// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/RoleService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 77,
      msg: '周断府装情领能住光给格越西。',
      role: {
        id: 'AbD4b361-63fc-5FCf-E1B3-D1B26Bbd462e',
        code: '处划义到华来本体程想院标按五样南。',
        name: '赵涛',
        create_user: '样术七两委当得情且调较难情石各平产如。',
        create_username: '每却保写较广下办市机手路。',
        create_time: 'jNrjPA',
      },
    });
  },
};
