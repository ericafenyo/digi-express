import { Router } from "express";

import TaskRoutes from "./task-routes";
import ProjectRoutes from "./project-routes";
import ViewRoutes from "./views-routes";

const router = Router();
router.use("api/v1/tasks", TaskRoutes);
router.use("api/v1/projects", ProjectRoutes);
router.use("/views", ViewRoutes);
