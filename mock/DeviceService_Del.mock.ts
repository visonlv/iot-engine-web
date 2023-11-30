// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 92,
      msg: '第高收变张平天素团界达历万。',
      id: '64924eEE-EacE-feEB-Db4E-FB90B1eCC85E',
    });
  },
};
