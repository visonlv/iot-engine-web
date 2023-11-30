// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/RoleService.List': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '斗报都资商究造世且江位长议。',
      items: [
        {
          id: '15cEf77d-C24C-eC49-0fdd-C4e45496bbd9',
          code: '十例认积土了约专员热准象者增容。',
          name: '蒋芳',
          create_user: '形算场其八设心张转转际放次技为见。',
          create_username: '加眼只查例据北先认济王结具来气厂度。',
          create_time: '!WIt',
        },
      ],
    });
  },
};
