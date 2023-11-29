// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/RoleService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 74,
      msg: '家定面物料南角近以更类制。',
      role: {
        id: '2cED2498-Dc14-fAeD-AA5e-EFB9d19fa2C4',
        code: '状织或矿无此后效车志南般。',
        name: '林磊',
        create_user: '果同群发出传先音级团广路改联。',
        create_username: '段生知技低记科快节组事养族明马子。',
        create_time: 'lPAd',
      },
    });
  },
};
