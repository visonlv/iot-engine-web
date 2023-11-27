// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AppService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 64,
      msg: '相候明志质较教图文等并义和分。',
      App: {
        id: '87D4DA9c-37f4-3BA9-FEce-986c4f54493C',
        code: '步想铁月无应千期白亲当计传离。',
        name: '罗静',
        describe: '高世给建较亲例他毛合又器结。',
        create_user: '实度报况采道验开单适决确况精。',
        create_username: '金通法反王较专经值称东观求日。',
        create_time: 'rG2LF',
      },
    });
  },
};
