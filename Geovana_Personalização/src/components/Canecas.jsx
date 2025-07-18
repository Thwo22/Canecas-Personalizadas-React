import styles from "./modules/canecas.module.css"
import CanecaDeCerâmica from "../assets/canecas-imagens/canecadeceramica.png"
import CanecaDePolimero from '../assets/canecas-imagens/canecadepolimero.png'
import CanecaMagica from "../assets/canecas-imagens/canecamagica.png"
import CanecaCromada from "../assets/canecas-imagens/canecacromada.png"
import CanecaComBombons from "../assets/canecas-imagens/canecacombombons.png"


function Canecas() {
    return(
        <div className={styles.sessaoCanecas}>
            <div className={styles.title}>
                <h1>Canecas</h1>
                <p>Personalizáveis</p>
            </div>


            <div className={styles.grid}>
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+de+Cer%C3%A2mica!">
                    <div className={styles.produtos}>
                        <img src={CanecaDeCerâmica} alt="Imagem de Caneca de cerâmica" />
                        <p>Caneca de cerâmica</p>
                        <p className={styles.preco}>R$ 29,90 à R$39,90 </p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+de+Pol%C3%ADmero!">
                    <div className={styles.produtos}>
                        <img src={CanecaDePolimero} alt="Caneca de Polímero" />
                        <p>Caneca de Polímero</p>
                        <p className={styles.preco}>R$ 24,90</p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+M%C3%A1gica!">
                    <div className={styles.produtos}>
                        <img src={CanecaMagica} alt="Imagem de Caneca Mágica" />
                        <p>Caneca Mágica</p>
                        <p className={styles.preco}>R$ 49,90</p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+Cromada!">
                    <div className={styles.produtos}>
                        <img src={CanecaCromada} alt="Imagem de Caneca Cromada" />
                        <p>Caneca Cromada</p>
                        <p className={styles.preco}>R$ 49,90</p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+de+Cer%C3%A2mica+com+Bombons!">
                    <div className={styles.produtos}>
                        <img src={CanecaComBombons} alt="Imagem de Caneca de Cerâmica + Bombons" />
                        <p>Caneca de Cerâmica + Bombons</p>
                        <p className={styles.preco}>R$ 44,90</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Canecas;