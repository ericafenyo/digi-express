import { Request, Response } from "express";
import { Task } from "../database/models/task-model";

export const createTask = async (req: Request, res: Response) => {
  try {
    await Task.create(req.body);
    res.redirect("/tasks");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().lean();
    console.log(tasks);
    res.render("tasks", { tasks });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("task", { task });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(204).end();
      return;
    }

    await Task.deleteOne({ _id: task._id });
    res.redirect("/tasks");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    task.title = req.body.title;
    task.completed = req.body.completed;
    task.updatedAt = new Date();

    const updatedTask = await task.save();
    res.redirect("/tasks");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
