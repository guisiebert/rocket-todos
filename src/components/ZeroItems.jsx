import clipboard from '../assets/Clipboard.svg'
import style from './ZeroItems.module.css'


export function ZeroItems() {
    return(
        <div className={style.zeroItems}>
            <img src={clipboard} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}