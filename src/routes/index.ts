import express,{Request,Response,Application,NextFunction,Router} from 'express';
import path from 'path';
export const router:Router = express.Router();

router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send("hello Peeps");
})


