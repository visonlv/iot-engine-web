// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductModelService.Page': (req: Request, res: Response) => {
    res.status(200).send({
      code: 80,
      msg: '加件主亲儿技程有具第斗消示。',
      total: 90,
      items: [
        {
          id: '450Ef53B-EB9A-9b18-872c-bf58EafcF447',
          name: '卢明',
          code: '少也革书义今者什命起之林眼效。',
          type: 36,
          model_def: '象细感百千省开取其万油现门空眼采毛。',
          desc: '作车商时酸被风三使常参格区然什员但己。',
          product_id: 'Df967710-C6CB-Af0D-70FB-77238ECb6f4D',
          create_time: 'v[O&0G',
          is_sys: 'xE1C',
        },
        {
          id: '74ff5591-4642-DBA5-8ba5-2E8cD9EF8Af3',
          name: '陆静',
          code: '完龙积统张处积公第叫力对没再表须根院。',
          type: 37,
          model_def: '本心采以条国效形料热或周验。',
          desc: '世快习次气县因程命完目计层约意几。',
          product_id: 'A53bCDb0-dAe2-F227-0761-78dFdF6F73D5',
          create_time: 'm88$(o',
          is_sys: '(2VL8fR',
        },
        {
          id: 'daAAc645-5edd-FFb0-7dB7-dc4e73Dd375C',
          name: '段艳',
          code: '厂术置气具还类效集位它理构平。',
          type: 38,
          model_def: '地做低细现政场步权想信带主过。',
          desc: '风层白现对定教联性山法理克非前十任。',
          product_id: '6Fbe4dCC-CB48-B5d2-C722-a7e85Faa4F6B',
          create_time: 'cgO(cq',
          is_sys: '5cUYHd',
        },
      ],
    });
  },
};
