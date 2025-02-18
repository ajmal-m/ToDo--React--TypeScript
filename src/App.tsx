import { useState } from "react";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 bg-gray-800 dark:bg-gray-800">
      <div className="flex flex-col gap-[8px]">
        <form action="" className="flex flex-col gap-[8px]">
          <input 
            type="text" 
            className="
              bg-[#f5f5f5] dark:bg-[#f5f5f5] border 
              rounded p-[4px] focus:outline-none focus:ring-0 
              text-[#242424] dark:text-[#242424]
            " 
            name="todoText" 
            id="todoText" 
          />
          <button type="submit"  className="w-full bg-[#644dff] py-[4px] rounded">ADD</button>
        </form>

        <div className="max-h-[400px] overflow-y-auto flex flex-col gap-[8px] bg-[black] text-[white] rounded">
          <div className="w-full flex justify-between px-[8px] py-[4px]">
            <p>Text</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
