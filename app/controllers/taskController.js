import {
  createTask as createTaskQuery,
  getTaskById as getTaskByIdQuery,
  updateTask as updateTaskQuery,
  deleteTask as deleteTaskQuery,
} from "../model/task.query.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    if (new Date(dueDate) <= new Date()) {
      return res
        .status(400)
        .json({ message: "Due date must be in the future" });
    }

    const task = await createTaskQuery(
      title,
      description,
      status,
      dueDate,
      req.user.user_id,
    );

    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;

    const task = await updateTaskQuery(
      id,
      req.user.user_id,
      title,
      description,
      status,
      dueDate,
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      success: true,
      task,
      message: "Task update successful",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Task update failed",
      error: error.toString(),
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await deleteTaskQuery(id, req.user.user_id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      success: true,
      message: "Task delete successful",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Task delete failed",
      error: error.toString(),
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await getTaskByIdQuery(req.params.id, req.user.user_id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
