export type Task = {
  id: string;
  type: string;
  attributes: {
    id: string;
    addedAt: string; 
    attachmentsCount: number; 
    boardId: string;
    priority: number;
    status: number;
    title: string;
  };
}

export type GlobalTaskListResponse = {
  data: Array<Task>;
}

export type TaskDetail = {
    id: string,
    type: string,
    attributes: {
      id: string,
      title: string,
      description: string | null,
      boardId: string,
      boardTitle: string,
      order: number,
      status: number,
      priority: number,
      startDate: string | null,
      deadline: string | null,
      addedAt: string,
      updatedAt: string,
      attachments: Array<string>
    };
}

export type GetTaskOutput = {
  data: TaskDetail;
}

