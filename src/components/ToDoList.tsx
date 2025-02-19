
type ListItem = {
    id: number,
    value: string
}

type ToDoListParams = {
    todoList: ListItem[],
    setTodoList: (callback: (value: ListItem[]) => ListItem[]) => void
}

import {ToDoItem} from '../components/ToDoItem';


export const  ToDoList = ({todoList , setTodoList} : ToDoListParams) => {


    const deleteTodo = (key: number): void => {
        try {
          setTodoList((prev) => prev.filter((item) => item?.id !== key));
        } catch (error) {
          console.error("Error deleting todo:", error);
        }
    };

    return (
        <>
         {
            todoList.map((item) => {
              return(
                <ToDoItem item={item} deleteTodo={deleteTodo} />
              )
            })
          }
        </>
    )
}