import express from "express";
import * as taskController from "../controllers/taskController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/create", authMiddleware, taskController.createTask);
router.get("/getById/:id", authMiddleware, taskController.getTaskById);
router.put("/updateTask/:id", authMiddleware, taskController.updateTask);
router.delete("/deleteTask/:id", authMiddleware, taskController.deleteTask);

export default router;
