
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
        <div>
            <p>{props.text}</p>
            <button onClick={() => valider(props.id)}>Valider</button>
            <button onClick={() => supprimer(props.id)}>Supprimer</button>
        </div>
    )
}