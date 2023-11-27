// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.RefreshToken': (req: Request, res: Response) => {
    res.status(200).send({
      code: 98,
      msg: '机事风式快线界立表铁小代象律状事科。',
      token: '们来积知该色将管算论传必给造加到金。',
    });
  },
};
