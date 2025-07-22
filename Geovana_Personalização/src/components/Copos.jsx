import styles from "./modules/sessoes.module.css"
import copoDePolimeroComAlca470ml from "../assets/copos-imagens/copoDePolimeroCTampa.png"
import copoDePolimeroComTampa400ml from "../assets/copos-imagens/copoDePolimeroCTampa.png"

function Copos() {
    return(
        <div className={styles.sessaoCopos}>
            <div className={styles.title_black}>
                <h1>Copos</h1>
                <p>Personalizáveis</p>
            </div>


            <div className={styles.grid}>
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+um+Copo+de+Pol%C3%ADmero+c/+Al%C3%A7a!">
                    <div className={styles.produtos}>
                        <img src={copoDePolimeroComAlca470ml} alt="Imagem de Copo de Polímero C/ Alça" />
                        <p>Copo de Polímero C/ Alça (470ml)</p>
                        <p className={styles.preco}>R$ 39,90</p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+um+Copo+de+Pol%C3%ADmero+c/+Tampa!">
                    <div className={styles.produtos}>
                        <img src={copoDePolimeroComTampa400ml} alt="Imagem de Copo de Polímero C/ Tampa" />
                        <p>Copo de Polímero C/ Tampa (400ml)</p>
                        <p className={styles.preco}>R$ 39,90</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Copos;