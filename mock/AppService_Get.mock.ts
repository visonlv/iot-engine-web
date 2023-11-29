// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 87,
      msg: '江月接件斗山标步走件展中些层实红现。',
      App: {
        id: '2d11bA68-EAFE-2e2d-13D3-CAd7176eB2E2',
        code: '引火件细拉别县好心常层易知众间比的很。',
        name: '张超',
        describe: '装直方们改如很点思资三阶适每。',
        create_user: '米也容通原式质老选生思生。',
        create_username: '次传拉长转还厂些时但县对为导。',
        create_time: '7xuOoV',
      },
    });
  },
};
