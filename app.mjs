import express from "express";
import cors from "cors";
import { port } from "./src/config/confing.mjs";
import Connect from "./src/db/connect.mjs";

import productsRoute from "./src/routers/productsRouter.mjs";


const app = express()

app.use(cors({origin: '*'}))
app.use(express.json())
app.use(productsRoute)


Connect()
app.listen(port,()=>{

    console.log('connect');

})
