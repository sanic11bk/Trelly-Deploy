import { useEffect, useState } from "react";
import type { Task } from "../type/tasks";
import { getTasks } from "../dal/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Array<Task> | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    getTasks(controller)
      .then((data) => setTasks(data.data))
      .catch((err) => console.error(err));

    return () => controller.abort("Пропущен повторный запрос на сервер");
  }, []);

  return {
    tasks,
  };
};