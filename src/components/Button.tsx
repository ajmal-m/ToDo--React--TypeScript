
type ListItem = {
    id: number,
    value: string,
}

type ButtonType = {
    children: JSX.Element | string,
    item?: ListItem,
    deleteTodo?: () => void,
    className?: string,
    type?: 'submit'|'button'
}


export const Button = ({ children, deleteTodo, className, type} : ButtonType) => {
    return (
        <>
            <button onClick={deleteTodo} className={className} type={type}>
               {children}
            </button>       
        </>
    )
}