/*
   CARD
*/

import { TasksCard } from "../types";

export default function TaskCard({task, deleteTask}:TasksCard) {
  return (
    <div className="card card-body rounded-0 text-dark ">
        <h2>{'Title Task: '+ task.title}</h2>
        {'ID: '+task.id}
        <p>{'Description: '+ task.description}</p>

       <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn btn-danger" style={{width:'5em'} }
          onClick={()=>(task.id && deleteTask(task.id))}
          >
              Delete
          </button>
      </div>

  </div>
  );
}
