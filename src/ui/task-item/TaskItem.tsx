import type { Dispatch } from "react";
import { colors } from "../../data/data";
import type { Task } from "../../type/tasks";

import styles from "./TaskItem.module.css";
import clsx from "clsx";

type TaskItemProps = {
  taskId: string;
  task: Task;
  setSelectedTaskId: Dispatch<React.SetStateAction<string>>;
  setBoardId: Dispatch<React.SetStateAction<string>>;
};

export const TaskItem = ({
  taskId,
  task,
  setSelectedTaskId,
  setBoardId,
}: TaskItemProps) => {
  const isPaintingBorder = taskId === task.id;
  const taskPriority = colors[task.attributes.priority];
  const isDone = task.attributes.status;

  const taskClassName = clsx({[styles.task]: true, [styles[taskPriority]]: true, [styles.special_border]: isPaintingBorder});

  const titleClassName = clsx({[styles.done_task]: isDone});

  const handleClickTrack = (task: Task) => {
    setSelectedTaskId(task.id);
    setBoardId(task.attributes.boardId);
  };

  return (
    <li
      key={task.id}
      className={taskClassName}
      onClick={() => handleClickTrack(task)}
    >
      <div>
        <h4>Заголовок: </h4>
        <span className={titleClassName}>
          {task.attributes.title}
        </span>
      </div>
      <div>
        <label htmlFor={task.attributes.title}>Статус: </label>
        <input
          type="checkbox"
          id={task.attributes.title}
          defaultChecked={task.attributes.status === 2}
        />
      </div>
      <div>
        <h4>Дата создание задачи: </h4>
        <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
      </div>
    </li>
  );
};
