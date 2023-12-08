// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/RoleService.ListByCode': (req: Request, res: Response) => {
    res.status(200).send({
      code: 82,
      msg: '适备海务务求水意温器毛把受况却取划。',
      items: [
        {
          id: '42fe3ac8-E6f4-1B62-DEF7-44f5165dAe3B',
          code: '而两制手采管社算斗支时前其目备原低。',
          name: '于平',
          create_user: '管准包龙科质土工单示际采百劳济。',
          create_username: '展代她消持单术件织便万三报多权党。',
          create_time: 'DrNTTK',
        },
        {
          id: 'b87b5fE2-8c54-4FE9-Fb42-0b0B16B10B84',
          code: '级们起际南办克始派什北便品即包周。',
          name: '孟静',
          create_user: '七形然情联开质重准意它果许。',
          create_username: '新国长干它要却强反音每干消以件。',
          create_time: 'tFi5Q]',
        },
      ],
    });
  },
};
