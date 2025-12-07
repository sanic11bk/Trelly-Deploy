import type { GetTaskOutput, GlobalTaskListResponse } from "../type/tasks";

export const task: GetTaskOutput = {
  data: {
    id: "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
    type: "tasks",
    attributes: {
      id: "12",
      title: "learn useEffect",
      order: -1,
      deadline: "2029-12-27T17:51:48.031Z",
      startDate: "2025-09-09T17:51:48.031Z",
      addedAt: "2025-09-09T08:30:59.034Z",
      priority: 3,
      status: 2,
      updatedAt: "2025-09-19T14:24:20.399Z",
      boardId: "13923117-72de-4788-a7f0-4c42f162a5ab",
      boardTitle: "hfgh",
      description:
        "useEffect is a React Hook that lets you synchronize a component with an external system.",
      attachments: [],
    },
  },
};

export const tasks = {
  data: [
    {
      id: "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
      type: "tasks",
      attributes: {
        id: "1",
        title: "learn useEffect",
        boardId: "13923117-72de-4788-a7f0-4c42f162a5ab",
        status: 2,
        priority: 3,
        addedAt: "2025-09-09T08:30:59.034Z",
        attachmentsCount: 0,
      },
    },
    {
      id: "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
      type: "tasks",
      attributes: {
        id: "2",
        title: "html",
        boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
        status: 0,
        priority: 1,
        addedAt: "2025-08-27T17:51:48.031Z",
        attachmentsCount: 0,
      },
    },
    {
      id: "b6213cee-b407-4580-9276-be4f5919375d",
      type: "tasks",
      attributes: {
        id: "3",
        title: "css",
        boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
        status: 0,
        priority: 1,
        addedAt: "2025-08-27T17:51:44.710Z",
        attachmentsCount: 0,
      },
    },
    {
      id: "4c37b109-d930-4ad4-9e37-4f94d618b59a",
      type: "tasks",
      attributes: {
        id: "4",
        title: "js",
        boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
        status: 0,
        priority: 1,
        addedAt: "2025-08-27T17:51:21.515Z",
        attachmentsCount: 0,
      },
    },
    {
      id: "0319fde0-3e69-4240-9ee4-278ce525f7f6",
      type: "tasks",
      attributes: {
        id: "5",
        title: "title3",
        boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
        status: 0,
        priority: 0,
        addedAt: "2025-07-03T14:56:48.867Z",
        attachmentsCount: 0,
      },
    },
  ],
};

export const getTask = async (
  // taskBoardId: string,
  // taskId: string
): Promise<GetTaskOutput> =>  Promise.resolve(task);

export const getTasks = async (
  // controller: AbortController
): Promise<GlobalTaskListResponse> => Promise.resolve(tasks);

