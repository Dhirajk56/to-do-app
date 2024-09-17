import React ,{ useState,useEffect }from "react";
import TaskForm from "../component/taskForm";
import "./App.css"
import TaskColumn from "../component/TaskColumn";
import DoingIcon from "../assets/glowing-star.png"
import DoneIcon from "../assets/check-mark-button.png"
import todoIcon from "../assets/direct-hit.png"


const oldTask= localStorage.getItem("tasks");
console.log(oldTask);
const App = ()=>{
  const [tasks,setTasks]=useState(JSON.parse(oldTask) || [])
  useEffect(()=> {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  } ,[tasks])
  const handleDelete =(taskIndex) =>{
    const newTasks=tasks.filter((tasks,index) => index !== taskIndex)
    setTasks(newTasks)
  }
  return(
    <div className="app">
      <TaskForm setTasks={setTasks}/>
      <main className="app_main">
        <TaskColumn  title="To do" icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn title="Doing" icon={DoingIcon} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn title="Done" icon={DoneIcon} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
   
  )
}
export default App