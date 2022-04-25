
interface TodoProps {
    text: string,
    id: number,
    removeTodo: Function
}


export function Todo(props: TodoProps) {
    
    function valider(id: number) {
        //message
        props.removeTodo(id)
    }
    function supprimer(id: number) {
        //message
        props.removeTodo(id)
    }

    return (
        <div className="todo">
            <p>{props.text}</p>
            <div>
                <button className="button button--green" onClick={() => valider(props.id)}><i className="fas fa-check"></i></button>
                <button className="button button--red" onClick={() => supprimer(props.id)}><i className="fas fa-times"></i></button>
            </div>
            
        </div>
    )
}