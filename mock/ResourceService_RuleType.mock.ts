// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.RuleType': (req: Request, res: Response) => {
    res.status(200).send({
      code: 77,
      msg: '济已种将应度周说方到即主易满都照。',
      list: ['成调温观周能究响民这际路六部。', '农改术单领想商给半复满存当图公然。'],
    });
  },
};
