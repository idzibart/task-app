import { Fragment } from "react";
import Header from "./components/Layout/Header";
import TasksInput from "./components/Tasks/TasksInput";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <TasksInput/>
      </main>
    </Fragment>
  );
}

export default App;