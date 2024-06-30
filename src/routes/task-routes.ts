import { Router } from "express";
import { createTask, getTasks } from "../services/task-service";

const router = Router();

router.post("/api/v1/tasks", createTask);
router.get("/api/v1/tasks", getTasks);

export const TaskRoutes = router;
