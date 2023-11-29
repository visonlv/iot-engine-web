// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.Login': (req: Request, res: Response) => {
    res.status(200).send({
      code: 65,
      msg: '十究外自话响身报一法正五期片身价。',
      user_id: 'cbd4F647-62Ec-45c3-D1fC-ECDE4C7c8fBc',
      role_codes: [
        '标广几头油长正主形养十商种也。',
        '毛始建江速做消业亲重运式总。',
        '老今张选装运六改切它按并斗。',
        '何计才算所研矿角多志快号出心系都。',
      ],
      token: '由本写龙整通会自增广信个儿格因本知。',
    });
  },
};
