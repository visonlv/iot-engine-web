// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Update': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '立分料一容江派你类传习好除。',
      id: 'eAC9eBCd-21CE-BD96-DE25-32a152f6Fec0',
    });
  },
};
