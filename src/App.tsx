import { useState } from 'react';
import './App.css';

import {type Task} from '../src/types'
import {type PropString} from '../src/types'

import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


function App({title}:PropString) {

    const [tasks, setTasks] = useState<Task[]>([
      // {
      //   id:1,
      //   title: 'Learn React',
      //   description: 'Learn React',
      //   completed: false
      // }
    ]);

//Generar ID con getTime
  const getCurrentTimeStamp = ():number=> new Date().getTime();


//Guardar Nueva Tarea
    const newAddTask = (task:Task)=>{
      setTasks([...tasks,{...task, id:getCurrentTimeStamp(), completed:false}]) 
    }

//Delete
const deleteTask = (id:number) =>setTasks(tasks.filter(task => task.id !== id));

 
  return (

    <div className='bg-dark text-white' style={{height:'100vh'}}>

        <NavBar title={title/*title='React and TypeScript'*/}/>

      <main className='container p-4'>
            <div className='row'>
                <div className=' col-md-4'> 
                    <TaskForm newAddTask={newAddTask}/>
                </div>

                <div className=' col-md-8'>
                    <div className='row'>
                        <TaskList tasks={tasks} deleteTask={deleteTask}/>
                    </div>
                </div>
            </div>
        </main>
        
    </div>

  );
}

export default App;
