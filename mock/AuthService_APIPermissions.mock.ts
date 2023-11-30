// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.APIPermissions': (req: Request, res: Response) => {
    res.status(200).send({
      code: 69,
      msg: '给白提点指区两引求交话压分石。',
      enable: true,
      user_id: '52E2e15f-74Af-f553-24Ef-Fb9b3E63C02D',
      role_codes: [
        '知图四效中况意争许们往许决时。',
        '即基重当革本议命子级住们合取其合。',
        '听数金带原张平在界义点音济好就海直。',
        '大位七极常公准都教位九热步生然。',
        '外人满满争已派月圆手走状素。',
        '有断情集则手族六此按低后华建话作。',
        '先各许约证及研条快名小土力别记发增。',
      ],
      app_code: '党半叫运拉按白下见道此格机石家根基。',
      http_status: 66,
      is_white: true,
    });
  },
};
