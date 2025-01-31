import express from 'express';
import { getInfo } from '../controllers/infoController';

const router = express.Router();

router.get('/', getInfo );

export default router