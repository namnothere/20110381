import express from 'express';
import { messageController, mygroupController, studentController } from '../controllers/index.js';
import { MSSV } from '../models/mygroup.model.js';
const router = express.Router();

router.get('/', mygroupController);
router.post(`/${MSSV}/:id`, studentController);
router.get(`/${MSSV}/:id`, studentController);
router.get('/message', messageController);
router.get('/message/:id', messageController);

export default router;
