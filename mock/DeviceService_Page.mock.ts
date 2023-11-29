// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/DeviceService.Page': (req: Request, res: Response) => {
    res.status(200).send({
      code: 93,
      msg: '级明给布心品热料积细存酸天或起。',
      total: 86,
      items: [
        {
          id: 'e6Fa6D52-2EDA-AF64-2E94-050951BB15D5',
          pk: '场算始而路风造形张儿候住号建气。',
          name: '彭洋',
          sn: '表合称车结内感更色声说党年非。',
          group: 60,
          secret: '色去命且压般流实及油地真式原条发装期。',
          desc: '部将文保权美石他儿些向名分快天。',
          create_time: 'r[rUC',
        },
        {
          id: 'DeCcfCB6-CE9b-CFF3-6C56-cAB39aE8A66D',
          pk: '外此民备月值群中六办格音民算干只美。',
          name: '丁丽',
          sn: '眼严那及真放就难光响记较结酸。',
          group: 78,
          secret: '置证接产此目该精南同力料方它温例里自。',
          desc: '主走头离又那并验称合样边置因属。',
          create_time: 'Jij$Z',
        },
      ],
    });
  },
};
