// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/ApiWhiteListService.Add': (req: Request, res: Response) => {
    res.status(200).send({
      code: 90,
      msg: '料情上万科亲口取难物这重南因山第特。',
      id: 'b9aB4f27-b569-dEC3-9f02-B22bcEA1A1F3',
    });
  },
};
