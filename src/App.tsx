import { useState } from "react";
import { Form } from "./components/Form";

type ListItem = {
  id: number,
  value: string
}

function App() {
  const [text , setText]= useState<string>("");
  const [todoList, setTodoList] = useState<ListItem[]>([]);


  const deleteTodo = (key: number): void => {
    try {
      setTodoList((prev) => prev.filter((item) => item?.id !== key));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 bg-gray-800 dark:bg-gray-800">
      <div className="flex flex-col gap-[8px]">
        <Form  text={text} setTodoList={setTodoList}  setText={setText}/>

        <div className="max-h-[400px] overflow-y-auto flex flex-col gap-[8px]">

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
        </div>
      </div>
    </main>
  );
}

export default App;
