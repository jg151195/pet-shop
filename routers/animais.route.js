import express from 'express';
import animaisController from '../controlller/animais.controller.js';


const router = express.Router();

router.post('/', animaisController.createAnimal);
router.get('/', animaisController.getAnimais);
router.get('/:id', animaisController.getAnimal);
router.put('/', animaisController.updateAnimal);
router.delete('/:id', animaisController.deleteAnimal);
export default router