// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 87,
      msg: '置前联节世红构为列问半劳能即。',
      App: {
        id: '4b536ca4-2BBd-E37F-5c86-bB13a42BF4b1',
        code: '确度至治千对百完对电表资那八年元部上。',
        name: '龚娟',
        describe: '后研起响科联标话七算作组人完便日。',
        create_user: '斯为作众有成于边米维改将用有近。',
        create_username: '积计列下先从儿标类必划信人二须。',
        create_time: '66)sr',
      },
    });
  },
};
