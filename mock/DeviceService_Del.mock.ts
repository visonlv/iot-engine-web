// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 91,
      msg: '市始场置际价流书现节大克任队志。',
      id: 'aC27CC72-FDd3-C881-7Ee1-5c15491e65fb',
    });
  },
};
