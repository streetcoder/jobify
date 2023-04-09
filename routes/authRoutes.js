import express from 'express'
const router = express.Router()

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
    windowMS: 15 * 60 * 1000,
    max: 10,
    message: 'Too many requests from this IP, please try again after 15 minutes',
})

import { register, login, updateUser} from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js';
import testUser from '../middleware/testUser.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch( authenticateUser, testUser, updateUser);

export default router