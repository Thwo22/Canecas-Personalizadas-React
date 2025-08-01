import { Link } from "react-router-dom";
import styles from "../css_routes/header_routes.module.css"
import logo from "../../assets/icons/foto-logo.png"
import Botao from "../../components/botao"


function Header_route() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo da empresa" />
            <menu>
                <nav>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
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

export default Header_route;