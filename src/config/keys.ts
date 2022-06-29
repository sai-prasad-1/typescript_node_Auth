import dotenv from "dotenv"

dotenv.config()

const MONGO_USER:string = process.env.MONGO_USER||"";
const MONGO_PASSWORD:string = process.env.MONGO_PASS||"";


export const MongoURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.by4sbr8.mongodb.net/?retryWrites=true&w=majority`

