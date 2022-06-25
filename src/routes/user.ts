import express,{Request,Response,Application,NextFunction,Router} from 'express';
import path from 'path';
import controller from "../controllers/user";
export const userRouter:Router = express.Router();

userRouter.get('/login',(req:Request,res:Response,next:NextFunction)=>{
    
})

userRouter.post('/register',controller.register)


