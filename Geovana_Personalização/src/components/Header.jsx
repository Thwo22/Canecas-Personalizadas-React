import { Link } from "react-router-dom";
import styles from "./modules/header.module.css"
import logo from "../assets/icons/foto-logo.png"
import Botao from "../components/botao"

function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo da empresa" />
            <menu>
                <nav>
                    <p>
                        <Link to="/galeria">Galeria</Link>
                    </p>
                    <p>
                        <Link to="/comoFunciona">Como funciona?</Link>
                    </p>
                </nav>
            </menu>
            <Botao/>
        </header>
    )
}

export default Header;