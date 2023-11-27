// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.GetMenu': (req: Request, res: Response) => {
    res.status(200).send({
      code: 81,
      msg: '很与圆听者集动验接面可头养。',
      menu: '思内西主石象条影几建而构求压矿价。',
    });
  },
};
