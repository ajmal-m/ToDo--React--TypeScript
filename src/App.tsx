import { useState } from "react";
import { Form } from "./components/Form";
import { ToDoList } from "./components/ToDoList";

type ListItem = {
  id: number,
  value: string
}

function App() {
  const [text , setText]= useState<string>("");
  const [todoList, setTodoList] = useState<ListItem[]>([]);

  
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 bg-gray-800 dark:bg-gray-800">
      <div className="flex flex-col gap-[8px]">
        <Form  text={text} setTodoList={setTodoList}  setText={setText}/>

        <div className="max-h-[400px] overflow-y-auto flex flex-col gap-[8px]">
          <ToDoList todoList={todoList} setTodoList={setTodoList}/>
        </div>
      </div>
    </main>
  );
}

export default App;
