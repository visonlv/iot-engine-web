// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 69,
      msg: '无问消容类作向前不专形市要增。',
      id: 'dE396597-d0bD-EACC-8AD1-d7215EeAe472',
    });
  },
};
