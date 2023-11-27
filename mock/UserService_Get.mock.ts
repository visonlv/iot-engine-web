// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 72,
      msg: '华无龙利入们用白装会收场斯。',
      item: {
        id: '1e3724F0-11eB-BbeB-bABe-CB2be7B0A6Ff',
        account: '强持且林始传程空习研能高斗提如养一。',
        password: 'string(16)',
        nick_name: '及联并行联很太系务据已可儿改取为统需。',
        phone: '11273377619',
        email: 'r.bfx@ewvxlts.pt',
        create_time: '9&c9',
        create_username: '积子者用广段入日但造据海联养论儿。',
        create_user: '规表度体整研资毛深众在认查。',
        role_code: [
          '准常红社放消共和见之究较原时科规即内。',
          '意你适起每算着知开布增参统。',
          '当定办商百识造战最法政必石局规切受。',
          '采特方声小发商而象权音队走酸圆。',
          '思机八法统江斯基五还眼际记话半。',
        ],
      },
    });
  },
};
