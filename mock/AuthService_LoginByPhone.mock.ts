// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.LoginByPhone': (req: Request, res: Response) => {
    res.status(200).send({
      code: 74,
      msg: '百区低方深把所人精好音再小东只达农经。',
      user_id: '5AbfCC39-aF93-dF9B-3FFd-CABddb8BFdeA',
      role_codes: [
        '立教了识段门机之际织水酸备生长共。',
        '团江部达外究部查结年料方。',
        '委革子满或过想发根片动九情即济管子通。',
        '称深关满马总明全部社究离达动界听制。',
        '战金论事工构据外研发使马指八面东因院。',
        '效青东选员适律程热内活社约快教。',
        '向空理线料南头器里同素但条其地同。',
        '般属入活变红加层分快始局受土构。',
        '式论手制方每政儿多属且十北办素。',
        '方七省统加任该量它白数子。',
      ],
      token: '得儿两七空传行数已点能头。',
    });
  },
};
