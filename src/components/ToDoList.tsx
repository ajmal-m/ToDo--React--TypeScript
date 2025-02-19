
type ListItem = {
    id: number,
    value: string
}

type ToDoListParams = {
    todoList: ListItem[],
    setTodoList: (callback: (value: ListItem[]) => ListItem[]) => void
}


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
                <div className="w-full flex justify-between px-[8px] py-[4px] bg-[black] text-[white] rounded" key={item.id}>
                  <p>{item?.value}</p>
                  <button onClick={() => deleteTodo(item?.id)} >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer" height="20px" viewBox="0 -960 960 960" width="20px" 
                      fill="#e8eaed"
                    >
                      <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/>
                    </svg>
                  </button>
                </div>
              )
            })
          }
        </>
    )
}