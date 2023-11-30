// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/RoleService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 70,
      msg: '先重积立步现件气深小始军就。',
      role: {
        id: '73FCdDA5-cAfA-794B-96e3-a3c8FdE9358F',
        code: '共期重级成件上高出何劳都现平料等流。',
        name: '曹敏',
        create_user: '过最参起最必示眼为平派道是温整现。',
        create_username: '西准农点酸段进外龙手头反已。',
        create_time: '7^lr',
      },
    });
  },
};
