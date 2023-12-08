// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.LoginByEmail': (req: Request, res: Response) => {
    res.status(200).send({
      code: 72,
      msg: '任以接义各门状效标等长容已。',
      user_id: '16f7CBff-db4E-698d-2CB8-6A935B64C9Bf',
      role_codes: [
        '压严东济时省并半那相合强完温。',
        '低信眼口统信走来料争直社路集内。',
        '阶工观会直长识月方由确率引反。',
        '处持己解来参着之土基位位米好场记。',
        '才即却速求后华来维任离明究反。',
        '论备从拉严利五示天你亲把导总加。',
        '太年事期何山历光少铁万北大厂造县日极。',
        '很法委从为新命象种资克作该准。',
        '力县石们主百别路列收委说新料划然。',
      ],
      token: '导党员部联米极线系况务内力时。',
    });
  },
};
