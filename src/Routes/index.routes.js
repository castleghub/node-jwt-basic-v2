import { Router } from "express";
import { ping } from "../Controllers/index.controller.js";
import {logStuff as logstuff} from '../Middleware/logstuff.js'  

const router = Router();

router.get("/ping",logstuff, ping);

export default router;
