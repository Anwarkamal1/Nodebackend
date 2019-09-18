import { Router, Request, Response, NextFunction } from 'express';

import indexControler from '../controllers/index';

const router = Router();

router.route('/').get(indexControler.getOne);
export default router;
