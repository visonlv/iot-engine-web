// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 62,
      msg: '商主以管例形族备已没音向亲每。',
      item: {
        id: 'aBCEc4Ff-ec25-6Bb6-7A55-CFE3656edeA2',
        role_id: '6e0d4Fbd-7CE3-65BA-E199-FAF99FeC3f46',
        role_name: '然速容世产主车在须适任太书听低消月。',
        app_id: 'EEa9BEFF-b8C4-dFde-fAd3-bc83789377DA',
        app_name: '青压具接打第却白社报边同声。',
        resource_type: 1,
        resources: '以等约点易交转王国引团中通候易部。',
        create_time: 'KCSE',
        resources_json: '张最动好我适中白斯支出间满活。',
      },
    });
  },
};
