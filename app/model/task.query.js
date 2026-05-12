import pool from "../config/db.js";

export const createTask = async (
  title,
  description,
  status,
  dueDate,
  userId,
) => {
  const result = await pool.query(
    "INSERT INTO tasks(title, description, status, due_date, user_id) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [title, description, status, dueDate, userId],
  );
  return result.rows[0];
};

/* export const getTasksByUser = async (userId) => {
  const result = await pool.query("SELECT * FROM tasks WHERE user_id = $1", [
    userId,
  ]);
  return result.rows;
}; */

export const getTaskById = async (id, userId) => {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE id = $1 AND user_id = $2",
    [id, userId],
  );
  return result.rows[0];
};

export const updateTask = async (
  id,
  userId,
  title,
  description,
  status,
  dueDate,
) => {
  const result = await pool.query(
    "UPDATE tasks SET title=$1, description=$2, status=$3, due_date=$4 WHERE id=$5 AND user_id=$6 RETURNING *",
    [title, description, status, dueDate, id, userId],
  );
  return result.rows[0];
};

export const deleteTask = async (id, userId) => {
  const result = await pool.query(
    "DELETE FROM tasks WHERE id=$1 AND user_id=$2 RETURNING *",
    [id, userId],
  );
  return result.rows[0];
};
