import express from "express";
import cors from "cors";
import route from "./Routes/route.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

app.listen('9000', ()=> console.log('serve nyala'))