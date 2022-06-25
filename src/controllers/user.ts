import express,{Request,Response,Application,NextFunction,Router} from 'express';
import { Logging } from '../library/logging';



const register =(req:Request,res:Response,next:NextFunction)=>{
    res.setHeader('Content-Type', 'text/plain');
    const {name,email,password} =req.body;
    res.send(`${name} ${email} ${password} `);

    Logging.warn(req.body);
    
}


export default {register};