import express, { Request, Response, Application, NextFunction } from "express";
import path from "path";
import { router } from "./routes/index";
import { userRouter } from "./routes/user";
import { MongoURI } from "./config/keys";
import { Logging } from "./library/logging";
import mongoose, { ConnectOptions } from "mongoose";


const app: Application = express();

//DB Connection
mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    Logging.info("Connected to Db");
  })
  .catch((err) => {
    Logging.error(err);
  });

// Routes
app.use("/", router);
app.use("/user", userRouter);
// Body Parser
router.use(express.urlencoded({ extended: false}));
    router.use(express.json());     

app.listen(5000, () => console.log("Server started at port 6000"));

// QggxtCPksX8ddYaB
