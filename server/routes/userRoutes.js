import express from 'express'
import {registeruser,loginuser, userCredits, verifyRazorpay} from '../controllers/userController.js'
import userAuth from '../middleware/auth.js';

const userRouter = express.Router(); 

userRouter.post('/register',registeruser); 
userRouter.post('/login',loginuser); 
userRouter.get('/credits',userAuth , userCredits); 
userRouter.get('/pay-razor',userAuth , userCredits); 
userRouter.get('/verify-razor',  verifyRazorpay); 


export default userRouter; 