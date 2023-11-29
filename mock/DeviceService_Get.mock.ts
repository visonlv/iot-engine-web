// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 63,
      msg: '值铁能厂原思委传阶她区代深位位油。',
      item: {
        id: 'F9ff01fB-bFDB-2C9D-Cbe1-bB5d768b7aE7',
        pk: '接种时说造如理叫队队离节证土全。',
        name: '顾涛',
        sn: '广点术得又备者儿收红具意类民些则程。',
        group: 68,
        secret: '器七商土增其省众世手之书写到之同。',
        desc: '在律并极交当感斗采的江认府此计定几。',
        create_time: '&z2SbBi',
      },
    });
  },
};
