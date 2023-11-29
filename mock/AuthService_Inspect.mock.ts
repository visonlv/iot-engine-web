// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.Inspect': (req: Request, res: Response) => {
    res.status(200).send({
      code: 75,
      msg: '道元议造总内规常积太而安光己地劳响。',
      app_code: '史组数太进半听查品道件已任更。',
      is_exist: false,
      user: {
        id: 'efA6b729-6823-A43d-F252-4Afe2C99cCCE',
        account: '具商将办记何比候可流知与照联物者。',
        password: 'string(16)',
        nick_name: '王半定林素号习影民省会看业酸。',
        phone: '11224634173',
        email: 'i.xcpldhxnxb@echnlr.wf',
        create_time: 'j6lLCt',
        create_username: '国京事从业情始结干七层政革改。',
        create_user: '量资来极带务太并化这铁生火及工七者。',
        role_code: [
          '向完历种向民据件起争文青教使。',
          '手法就省率府平划联进备立温队。',
          '万象或单称细思白江改术历以温。',
          '面维工心般那去建支调省前列示。',
          '相间标效白再金类金发日置信下海又片。',
          '去治然或层之品持般响特原风须。',
        ],
      },
    });
  },
};
