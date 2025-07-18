import styles from "./modules/header.module.css"
import logo from "../assets/icons/foto-logo.png"

function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo da empresa" />
            <menu>
                <nav>Galeria</nav>
                <nav>Como Funciona?</nav>
            </menu>
            <button> Encomendar </button>
        </header>
    )
}

export default Header;