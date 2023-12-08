// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /rpc/thing/ProductService.GetModel': (req: Request, res: Response) => {
    res.status(200).send({
      code: 92,
      msg: '流增联出得安民其界团都你其加。',
      item: {
        id: 'CCc512A8-b9D1-5FEc-4245-D3D39CFf30C3',
        name: '冯杰',
        model: '音毛直便百又十学况运克达铁习志达必。',
        pk: '受本此和点段具照验原重物事社形进七。',
        transform: '权需自毛毛省圆影科信加深队。',
        protocol: '道战斗安特经候太把维中革江就思最统。',
        type: 57,
        thing_def: '极如总置对我局指权照是维织合。',
        desc: '置于每身六厂越安广打种把教红。',
        create_time: 'rQ(M',
      },
    });
  },
};
