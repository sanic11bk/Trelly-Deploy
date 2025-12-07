import { useEffect, useState } from "react";
import { getTask } from "../dal/api";
import type { TaskDetail } from "../type/tasks";

export function useTaskDetails(selectedTaskId: string | null, boardId: string | null) {
  const [taskDetails, setTaskDetails] = useState<TaskDetail | null>(null)

    useEffect(() => {
      if (!selectedTaskId || !boardId) {
        setTaskDetails(null);
        return;
      }
      getTask(boardId, selectedTaskId).then((data) => setTaskDetails(data.data));
    }, [selectedTaskId, boardId]);
 
  return { taskDetails }
}