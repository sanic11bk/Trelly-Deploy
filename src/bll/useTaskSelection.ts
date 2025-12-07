import { useState } from "react";

export const useTaskSelection = () => {
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [boardId, setBoardId] = useState("");

  return {
    selectedTaskId,
    setSelectedTaskId,
    boardId,
    setBoardId,
  };
};
