import { useTaskDetails } from "../../bll/useTaskDetails";
import styles from "./TaskDetails.module.css";

type TaskDetailsProps = {
  selectedTaskId: string;
  boarderId: string;
};

export const TaskDetails = ({ selectedTaskId, boarderId }: TaskDetailsProps) => {

  const { taskDetails } = useTaskDetails(selectedTaskId, boarderId)

  return (
    <div className={styles.detail}>
      <h1>Task details</h1>
      {!taskDetails && !selectedTaskId && <p>Task is not selected</p>}
      {!taskDetails && selectedTaskId && <h1>Loading...</h1>}
      {taskDetails && taskDetails.id !== selectedTaskId && <h1>Loading...</h1>}
      {taskDetails?.id === selectedTaskId && (
        <ul>
          <li>{taskDetails.attributes.title}</li>
          <li>{taskDetails.attributes.boardTitle}</li>
          <li>{taskDetails.attributes.description || "no description"}</li>
        </ul>
      )}
    </div>
  );
};
