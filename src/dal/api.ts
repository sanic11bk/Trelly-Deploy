import type { GetTaskOutput, GlobalTaskListResponse } from "../type/tasks";

const prepareHeaders = () => {
  const key = import.meta.env.VITE_API_KEY;
  if (!key) {
    return undefined;
  }

  return {
    "api-key": import.meta.env.VITE_API_KEY,
  };
};

export const getTask = async (
  taskBoardId: string,
  taskId: string
): Promise<GetTaskOutput> => {
  return fetch(
    `https://trelly.it-incubator.app/api/1.0/boards/${taskBoardId}/tasks/${taskId}`,
    {
      headers: prepareHeaders(),
    }
  ).then((res) => res.json());
};

export const getTasks = async (
  controller: AbortController
): Promise<GlobalTaskListResponse> => {
  return fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
    headers: prepareHeaders(),
    signal: controller.signal,
  }).then((res) => res.json());
};
