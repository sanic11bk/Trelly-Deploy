import { PageTitle } from "./ui/PageTitle.tsx";
import { TaskDetails } from "./ui/task-details/TaskDetails.tsx";
import { Footer } from "./ui/Footer.tsx";
import { Header } from "./ui/Header.tsx";
import { TasksList } from "./ui/tasks-list/TasksList.tsx";

import styles from "./App.module.css";
import { useTaskSelection } from "./bll/useTaskSelection.ts";

export const App = () => {
  const { selectedTaskId, setSelectedTaskId, boardId, setBoardId } = useTaskSelection()

  return (
    <div>
      <Header />
      <PageTitle />
      <div className={styles.tasksContainer}>
        <TasksList
          selectedTaskId={selectedTaskId}
          setSelectedTaskId={setSelectedTaskId}
          setBoardId={setBoardId}
        />
        <TaskDetails selectedTaskId={selectedTaskId} boarderId={boardId}/>
      </div>
      <Footer />
    </div>
  );
};
