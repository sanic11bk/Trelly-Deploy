import type { Dispatch } from "react";
import { useTasks } from "../../bll/useTasks";
import { TaskItem } from "../task-item/TaskItem";
import styles from "./TasksList.module.css";

type TasksListProps = {
  selectedTaskId: string;
  setSelectedTaskId: Dispatch<React.SetStateAction<string>>;
  setBoardId: Dispatch<React.SetStateAction<string>>;
};

export const TasksList = ({
  selectedTaskId,
  setSelectedTaskId,
  setBoardId,
}: TasksListProps) => {
  const { tasks } = useTasks();
  if (tasks === null) return <p>Загрузка...</p>;
  if (tasks === undefined) return <p>Проблема с сетью...</p>;
  if (tasks.length === 0) return <p>Задачи отсутствуют</p>;

  const onHandleClickReset = () => {
    setBoardId('');
    setSelectedTaskId('');
  }

  return (
    <div>
      <button type="button" onClick={onHandleClickReset}>
        Сбросить выделение
      </button>
      <div className={styles.container}>
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              taskId={selectedTaskId}
              task={task}
              setSelectedTaskId={setSelectedTaskId}
              setBoardId={setBoardId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
