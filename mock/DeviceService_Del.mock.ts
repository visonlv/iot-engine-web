// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 83,
      msg: '期作口二准加需百单六别所果深化教青。',
      id: '53e758b9-4CDC-bf27-cfFd-c9A5aF94cfe6',
    });
  },
};
