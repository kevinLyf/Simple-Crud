import { Router } from 'express';
import { create, getAllUsers, getUserById, update, deleteUser } from '../controllers/userController.js';
import { validId, validUser } from '../middlewares/globalMiddlewares.js';

const router = Router();

router.post('/', create);
router.get('/', getAllUsers);
router.get('/:id', validId, validUser, getUserById);
router.patch('/:id', validId, validUser, update);
router.delete('/:id', validId, validUser, deleteUser);

export default router;