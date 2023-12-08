// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.Inspect': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '历社其东局务你设党连有书学当越。',
      app_code: '门市南价种种人万所才和知多求效高具。',
      is_exist: false,
      user: {
        id: 'f8Ccb766-2dEE-fD34-D13f-D7AF945f0FFc',
        account: '更红主料定持年只标示每历给使决。',
        password: 'string(16)',
        nick_name: '四装属马们关头接亲多新外验员铁。',
        phone: '11125158687',
        email: 'u.zllhjqo@eexlfd.af',
        create_time: '@dlcO',
        create_username: '入或价层复新不热体后动形风接算。',
        create_user: '得过规决由单厂各社种做等。',
        role_code: [
          '边现事处级间算年并亲结工说也。',
          '史月把信响实机往少此王样又。',
          '联争从具红强种今基所里战。',
        ],
      },
    });
  },
};
