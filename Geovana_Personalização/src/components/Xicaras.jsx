import styles from "./modules/sessoes.module.css"
import Xicaras2x from "../assets/xicaras-imagens/xicara2x.png"
import Xicaras4x from "../assets/xicaras-imagens/xicara4x.png"


function Xicaras() {
    return(
        <div className={styles.sessaoXicaras}>
            <div className={styles.title}>
                <h1>Xícaras</h1>
                <p>Personalizáveis</p>
            </div>


            <div className={styles.grid}>
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+um+Kit+Torre+2+X%C3%ADcaras!">
                    <div className={styles.produtos}>
                        <img src={Xicaras2x} alt="Imagem de kit torre 2 xícaras" />
                        <p>Kit Torre 2 Xícaras</p>
                        <p className={styles.preco}>R$ 79,90</p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+um+Kit+Torre+4+X%C3%ADcaras!">
                    <div className={styles.produtos}>
                        <img src={Xicaras4x} alt="Imagem de kit torre 4 xícaras" />
                        <p>Kit Torre 4 Xícaras</p>
                        <p className={styles.preco}>R$ 119,90</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Xicaras;