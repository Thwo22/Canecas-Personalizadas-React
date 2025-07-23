import styles from "./modules/sessoes.module.css"
import copoAlca from "../assets/copos-imagens/copoDePolimeroCAlca470ml.jpeg"
import copoTampa from "../assets/copos-imagens/copoDePolimeroCTampa.png"

function Copos() {
    return(
        <div className={styles.sessaoCopos}>
            <div className={styles.shape_divider_green}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
                    <path d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z" fill="#C0E5CE"></path>
                </svg>
            </div>
            <div className={styles.title_black}>
                <h1>Copos</h1>
                <p>Personalizáveis</p>
            </div>


            <div className={styles.grid}>
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+um+Copo+de+Pol%C3%ADmero+c/+Al%C3%A7a!">
                    <div className={styles.produtos}>
                        <img src={copoAlca} alt="Imagem de Copo de Polímero C/ Alça" />
                        <p>Copo de Polímero C/ Alça (470ml)</p>
                        <p className={styles.preco}>R$ 39,90</p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+um+Copo+de+Pol%C3%ADmero+c/+Tampa!">
                    <div className={styles.produtos}>
                        <img src={copoTampa} alt="Imagem de Copo de Polímero C/ Tampa" />
                        <p>Copo de Polímero C/ Tampa (400ml)</p>
                        <p className={styles.preco}>R$ 39,90</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Copos;