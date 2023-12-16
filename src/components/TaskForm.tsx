/*
  Form para añadir Tareas
*/

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import { PropsFunction } from "../types";

const initialState = {
        title: '',
      description: ''
}

export default function TaskForm({newAddTask}:PropsFunction) {

  const [task, setTask] = useState(initialState);

  type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  
  const handleInputChange = ({target:{name, value}}:HandleInputChange) =>{
        setTask({
          ...task,
          [name]:value
        })
  }
  // const handleInputChange = ({target:{name, value}}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{

  //   setTask({
  //     ...task,
  //     [name]:value
  //   })
    
  // }


   const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     
     if(task.title && task.description){
       
      newAddTask(task);
      setTask(initialState)

     }  else{
      alert("You must complete all fields")
    }

    // setTask({
    //   title: '',
    //   description: ''
    // });

   }

   useEffect(() => {
  
     }, [task]);


  return (
    <div className='card card-body bg-secondary text-dark p-4 mt-2'>
      <h1>Add Task</h1>
       
       <form onSubmit={handleNewTask}>

        <input type='text'
               placeholder='Write Title'
               name='title'
               className='form-control mb-3 shadow-none border-0'
               onChange={handleInputChange}
               value={task.title}
        />

        <textarea 
         style={{width:'100%'}}
         placeholder='write a description'
         name='description' 
         rows={2}
         onChange={handleInputChange}
         value={task.description}
        /> 

        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary mt-3">
              Save <span><FaPlus/></span>
              
           </button>
        </div>

       </form>
    </div>
  );
}
