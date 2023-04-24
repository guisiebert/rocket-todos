import style from './TodoItem.module.css'
import check from '../assets/check.svg'
import trash from '../assets/trash.svg'

export function TodoItem({complete, todoName, id, onDelete, onToggle}) {


    function handleDelete() {
        console.log(`Deleting ${id}`)
        onDelete(id)
    }

    
    function handleToogle() {
        onToggle(id)
    }

    const checkedButton = <img 
        src={check} 
        className={style.checked}
        onClick={handleToogle}
    />
    
    const uncheckedButton = <div 
        // src={check} 
        className={style.unchecked}
        onClick={handleToogle}
    />
    
    

    return (
        <div className={style.todo}>
            {complete ? checkedButton : uncheckedButton}
            {complete ? <p className={style.checkedText}>{todoName}</p> : <p>{todoName}</p>}
            <img 
                src={trash} 
                className={style.trash}
                onClick={handleDelete}
            />
        </div>
    )
}