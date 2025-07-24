import { Link } from "react-router-dom";
import styles from "../css_routes/header_routes.module.css"
import logo from "../../assets/icons/foto-logo.png"


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
                        <Link to="/comoFunciona">Como funciona?</Link>
                    </p>
                </nav>
            </menu>
            <button> Encomendar </button>
        </header>
    )
}

export default Header_route;