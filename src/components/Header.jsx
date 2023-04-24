import style from './Header.module.css'
import Logo from '../assets/todo-Logo.svg'

export function Header() {
    return (
        <header className={style.header}>
            <img
                src={Logo} 
                className={style.logo}
            />
        </header>
    )
}

