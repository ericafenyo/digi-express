import { Router } from "express";

import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/task-controller";

const router = Router();

// Used for rendering views using GET method
router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);

// Used for form and data manipulations using POST method
// We are in views routes, so we are using POST method,
// For put and delete methods, check out the task routes.
router.post("/tasks/create", createTask);
router.post("/tasks/:id/update", updateTask);
router.post("/tasks/:id/delete", deleteTask);

export const ViewRoutes = router;
