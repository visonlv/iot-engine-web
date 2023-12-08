// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/AuthService.LoginByEmail': (req: Request, res: Response) => {
    res.status(200).send({
      code: 95,
      msg: '义积原今系边深布队级儿空除相价该非。',
      user_id: 'CBebA0FD-C104-9dfE-9D84-6B4D3b37e7bf',
      role_codes: [
        '事开党才称引收政科使济办温应识上斗。',
        '无工团边委也来约心决步制通文。',
        '候证设社海便就即约目内离节层备听难全。',
        '工王果红则界深专群给最养根。',
        '任第会往以示速体期青回业。',
        '十十合门队种书调习青形治别总验专。',
      ],
      token: '所好火斗自维单一斗格百边精劳人。',
    });
  },
};
