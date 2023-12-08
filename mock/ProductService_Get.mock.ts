// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 99,
      msg: '同然加美立话事一千织或亲难一应却素。',
      item: {
        id: '5EcEf5c3-cdC0-1AB4-8549-4d18D3c7DFC7',
        name: '周秀英',
        model: '去南报风受能给市给料查教标机七西连。',
        pk: '且议个合院头究位并风行按信民级。',
        transform: '斯土示发品道构将自主主活史总。',
        protocol: '统话院新始消等报经飞厂学回维劳。',
        type: 68,
        thing_def: '要力状过育周采气派中会约专多。',
        desc: '组部技条都率任证须直更放之不。',
        create_time: 'NZk(Wp',
      },
    });
  },
};
