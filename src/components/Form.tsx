

type FormParams = {
    text: string,
    setText: ( value : string) => void,
    setTodoList: ( callback: ( value : ListItem[]) => ListItem[] ) => void
}

type ListItem = {
    id: number,
    value: string
}

export const Form = ({ text  , setText, setTodoList} :FormParams ) => {

    const handleSubmit = (e : React.FormEvent): void => {
        try {
          e.preventDefault();
          if(!text.trim()){
            return
          }
          setTodoList((prev) => (
            [
              ...prev,
              {
                id:  Date.now(),
                value: text
              }
            ]
          ));
          setText("");
        } catch (error) {
          console.log(error);
          
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[8px]">
            <input 
                type="text" 
                className="
                bg-[#f5f5f5] dark:bg-[#f5f5f5] border 
                rounded p-[4px] focus:outline-none focus:ring-0 
                text-[#242424] dark:text-[#242424]
                " 
                value={text}
                onChange={(e) => setText(e.target.value)}
                name="todoText" 
                id="todoText" 
            />
            <button type="submit"  className="w-full bg-[#644dff] py-[4px] rounded">ADD</button>
        </form>
        </>
    )
}