import { Link } from "react-router-dom"
import styles from "../components/modules/footer.module.css"
import vetraLogo from "../assets/icons/vetra-logo.png"
import instaLogo from "../assets/icons/insta-logo.png"
import faceLogo from "../assets/icons/face-logo.png"
import linkedinLogo from "../assets/icons/linkedin-logo.png"
import telefoneLogo from "../assets/icons/telefone-logo.png"
import emailLogo from "../assets/icons/gmail-logo.png"
import gitLogo from "../assets/icons/github-logo.png"


function Footer() {
    return (
        <footer>
        <div className={styles.sobre_empresa}>
            <div className={styles.div_info}>
                <h2>Explorar Páginas</h2>
                <ul>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><Link to="/comoFunciona">Como Funciona?</Link></li>
                </ul>
            </div>
            <div className={`${styles.div_info} ${styles.contato}`}>
                <h2>Contato:</h2>
                <p><img src={telefoneLogo} alt="Telefone" />(11) 95249-3394</p>
                <p><img src={emailLogo} alt="email" /><a href="mailto:geovanabeatriz888@gmail.com">geovanabeatriz888@gmail.com</a></p>
            </div>
            <div className={`${styles.div_info} ${styles.redes_sociais}`}>
                <h2>Redes Sociais:</h2>
                <div className={styles.redes_da_empresa}>
                    <a href="https://www.instagram.com/geovana.personalizacao" target="blank"><img src={instaLogo} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100094998411396" target="blank"><img src={faceLogo} alt="Facebook" /></a>
                </div>
            </div>
        </div>
        <div className={styles.sobre_desenvolvedor}>
            <p>Site Desenvolvido por Thiago Santos&copy;</p>
            <img src={vetraLogo} alt="Vetra Logo" />
            <div className={styles.redes_dev}>
                <a href="https://www.instagram.com/vetra_code" target="blank"><img src={instaLogo} alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/thiago-santos-b23b8a1a4" target="blank"><img src={linkedinLogo} alt="Linkedin" /></a>
                <a href="https://github.com/Thwo22" target="blank"><img src={gitLogo} alt="Gihub" /></a>
            </div>
        </div>
    </footer>
    )
    
}

export default Footer;