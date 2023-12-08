// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Del': (req: Request, res: Response) => {
    res.status(200).send({
      code: 97,
      msg: '长林向运具全什布积所更边也。',
      id: 'F3b89BdB-cd0D-a1cf-65A1-D41dAEd1BAf3',
    });
  },
};
