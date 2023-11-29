// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/auth/PermissionService.Get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 78,
      msg: '识约运立场后回之直直要器分代期。',
      item: {
        id: '5dB8db77-4B8F-3DC5-7972-3a82A5C44F3c',
        role_id: '0cEbFFFA-f49e-7540-94FA-1DCCbE2Eb789',
        role_name: '北精府展明国家得往头原京系。',
        app_id: '25D8cF5D-0942-4Cb6-DfA9-1348eb6eD688',
        app_name: '车算相历任感造示千物做白。',
        resource_type: 1,
        resources: '整安老斗有划始话委东外式新列院。',
        create_time: 'UOV9',
        resources_json: '管制油极用由就节况转党林别件断象达。',
      },
    });
  },
};
