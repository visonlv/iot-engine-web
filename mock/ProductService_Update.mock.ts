// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 83,
      msg: '术数白没家地感持据目千叫都县史风压。',
      id: '2eB94bA6-4Dba-c3Cf-82c9-87EdF2b7F316',
    });
  },
};
