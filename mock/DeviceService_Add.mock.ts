// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 85,
      msg: '样变得战都就维该位形界红查看支基容。',
      id: '43c97D3c-bEDB-bddA-7085-0F13E2Ff3Be0',
    });
  },
};
