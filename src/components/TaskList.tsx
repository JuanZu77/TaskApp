/*
   Lista de Tareas creadas en la interfaz 
*/
/*snippets rfc crea el componente Automaticamente*/

import { type TasksList } from "../types";
import TaskCard from "./TaskCard";


export default function TaskList({tasks, deleteTask}:TasksList) {
  return (
    <div>
         {tasks.map(task=>(
          <div className="col-md-8 p-2" key={task.id}>
             <TaskCard task={task} deleteTask={deleteTask}/>
          </div>
             
            ))}
      
    </div>
  );
}
