import { Request, NextFunction, Response } from 'express';

class Index {
  constructor() {}

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    // res.render('index', {
    //   title: 'Welcome'
    // });
    res.json({
      title: 'i am rendered'
    });
  }
}

export default new Index();
