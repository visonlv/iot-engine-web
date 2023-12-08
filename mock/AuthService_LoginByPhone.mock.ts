// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.LoginByPhone': (req: Request, res: Response) => {
    res.status(200).send({
      code: 62,
      msg: '导今持马验高中县者段维素权。',
      user_id: 'EFc5e9bb-2B4B-CBb4-9Db4-9E6e3DCF9D52',
      role_codes: [
        '调从明即族看在群收状年对。',
        '着利县候声复计研单当该片不空。',
        '回干热年往压切果运表学省除每多据。',
        '制型以成位候山般向思个北回王思江快。',
        '建土国风据权表必消响常件复府被识连。',
        '每各少技近代展真活国广重起。',
      ],
      token: '效认金龙存西头知提转工强料求。',
    });
  },
};
