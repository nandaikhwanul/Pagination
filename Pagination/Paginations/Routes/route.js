import express from "express"
import { getUsers } from "../Controller/User.js";

const router = express.Router();

router.get('/users', getUsers);

export default router;