// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 94,
      msg: '身层易价结任见加土也可还。',
      id: '7EffB5F9-8F7f-d0E1-1C14-18cD6EA5abCb',
    });
  },
};
