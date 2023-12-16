
export interface Task {
    id?: number,
    title: string,
    description: string,
    completed?: boolean
}

/*App title */
export interface PropString {
    title?:string,
  }

  /*LIST */
export interface TasksList {
    tasks:Task[],
    deleteTask: (id:number)=>void
}

/*CARD */
export interface TasksCard{
    task:Task;
    deleteTask: (id:number)=>void
}

/* FORM function AddNewTask -> recibe un tipo de dato Tarea */
export interface PropsFunction {
  newAddTask: (task:Task)=>void
} 