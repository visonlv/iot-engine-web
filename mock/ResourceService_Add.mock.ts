// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ResourceService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '律记然组高间半为团住器结问。',
      id: 'Ec12eC5d-4043-Ad3D-627A-E7Aa55eC8562',
    });
  },
};
