import styles from "../components/modules/footer.module.css"

function Footer() {
    return (
        <footer>
        <div className={styles.sobre_empresa}>
            <div>
                <p>Explorar Páginas</p>
                <ul>
                    <li><p>Galeria</p></li>
                    <li><p>Como Funciona?</p></li>
                </ul>
            </div>
            <div>
                <p>Contato:</p>
                <span><img src="" alt="Telefone" /><p>(11)93342-0745</p></span>
                <span><img src="" alt="Gmail" /><p>thwo28391@gmail.com</p></span>
            </div>
            <div>
                <p>Redes Sociais:</p>
                <div className={styles.redes_da_empresa}>
                    <img src="" alt="Instagram" />
                    <img src="" alt="Facebook" />
                </div>
            </div>
        </div>
        <div className={styles.sobre_desenvolvedor}>
            <p>Site Desenvolvido por Thiago Santos&copy;</p>
            <img src="" alt="Vetra Logo" />
            <div>
                <img src="" alt="Instagram" />
                <img src="" alt="Linkedin" />
                <img src="" alt="Gihub" />
            </div>
        </div>
    </footer>
    )
    
}

export default Footer;