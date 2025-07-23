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
                    <li><p>Galeria</p></li>
                    <li><p>Como Funciona?</p></li>
                </ul>
            </div>
            <div className={`${styles.div_info} ${styles.contato}`}>
                <h2>Contato:</h2>
                <p><img src={telefoneLogo} alt="Telefone" />(11)xxxxx-xxxx</p>
                <p><img src={emailLogo} alt="email" />thwo28391@gmail.com</p>
            </div>
            <div className={`${styles.div_info} ${styles.redes_sociais}`}>
                <h2>Redes Sociais:</h2>
                <div className={styles.redes_da_empresa}>
                    <img src={instaLogo} alt="Instagram" />
                    <img src={faceLogo} alt="Facebook" />
                </div>
            </div>
        </div>
        <div className={styles.sobre_desenvolvedor}>
            <p>Site Desenvolvido por Thiago Santos&copy;</p>
            <img src={vetraLogo} alt="Vetra Logo" />
            <div className={styles.redes_dev}>
                <img src={instaLogo} alt="Instagram" />
                <img src={linkedinLogo} alt="Linkedin" />
                <img src={gitLogo} alt="Gihub" />
            </div>
        </div>
    </footer>
    )
    
}

export default Footer;