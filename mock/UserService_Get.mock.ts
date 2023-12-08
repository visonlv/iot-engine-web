// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/UserService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 92,
      msg: '适类基资张究属海满结写记导收。',
      item: {
        id: 'B9B99E4d-f283-FDAf-f1Eb-9D4C26C0D7ca',
        account: '清度身几己办万花北资近持整下率。',
        password: 'string(16)',
        nick_name: '形眼事受铁照决节全则强报感热所方较。',
        phone: '11457345175',
        email: 'e.unexx@ggw.yu',
        create_time: 'wKOei',
        create_username: '器第军会律议可组适大科史能亲识矿毛。',
        create_user: '长参调活九油利半开工月部划候与响按林。',
        role_code: [
          '知学其问低连间在西运热什。',
          '连解复经实从快号际革积根本现开百。',
          '可回率美千持总条那易住华资。',
          '按路学片教导安计持张他积维间往研。',
          '列由间了效领查安们包对确适角。',
          '率么难及通学极证写量米连于给称民想美。',
          '于存么听们加存原每条人列了加族自。',
        ],
      },
    });
  },
};
