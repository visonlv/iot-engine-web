// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.RefreshToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 99,
      msg: '因包亲照就化白况系化国深用业总。',
      token: '经片作保局率完万入论组步。',
    });
  },
};
