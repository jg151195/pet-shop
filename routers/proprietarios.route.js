import express from 'express';
import proprietariosController from '../controlller/proprietarios.controller.js';

const router = express.Router();

router.post('/', proprietariosController.createProprietario);
router.get('/', proprietariosController.getProprietarios);
router.get('/:id', proprietariosController.getProprietario);
router.put('/', proprietariosController.updateProprietario);
router.delete('/:id', proprietariosController.deleteProprietario);

export default router