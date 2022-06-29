import express, {
  Request,
  Response,
  Application,
  NextFunction,
  Router,
} from "express";
import { Logging } from "../library/logging";
import { IUser, User } from "../models/User";
import { genSalt, hash,compare } from 'bcrypt';




const register = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      Logging.error("User already exists");
      res.status(200).json({message:"User allready Exists"});

    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });

      //Hash Password
    genSalt(10, (err, salt) => {
        hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          // Upadate password to hashed password
          newUser.password = hash;

          newUser
            .save()
            .then((user) => {
              Logging.info(`Registerd user [${name}, ${email}]`);
              res.status(200).json({message:"User Created"});
            })
            .catch((err) => {
              Logging.error(`Couldnt Register user [${name}, ${email}]`+err);
              res.status(200).json({message:"User creation failed"});

            });
        });
      });
    }
  });
};



const login =async (req:Request,res:Response,next:NextFunction)=>{
  const {email,password}=req.body;
  User.findOne({email:email}).then((user)=>{
    if(!user){
      Logging.error("User not found");
      res.status(400).json({message:"User not found"});
    }else{
      compare(password,user.password,(err,isMatch)=>{
        if(err){
          Logging.error("Error in comparing password");
          res.status(400).json({message:"Error in comparing password"});
        }else if(isMatch){
          Logging.info(`User [${user.name}, ${user.email}] logged in`);
          res.status(200).json({message:"User logged in"});
        }else{
          Logging.error("Password incorrect");
          res.status(400).json({message:"Password incorrect"});
        }
      });
    }
  })

}
export default { register ,login};
