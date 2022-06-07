import express from 'express';
import servicosController from '../controlller/servicos.controller.js';


const router = express.Router();

router.post('/', servicosController.createServico);
router.get('/', servicosController.getServicos);

export default router