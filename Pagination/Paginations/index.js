import express from "express"
import cors from "cors" 

const app = express();
app.use(cors());
app.use(express.json());

app.listen('9000', ()=> console.log('serve nyala'))