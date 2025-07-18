import styles from "./modules/canecas.module.css"
import CanecaDeCerâmica from "../assets/canecas-imagens/canecadeceramica.png"
import CanecaDePolimero from '../assets/canecas-imagens/canecadepolimero.png'
import CanecaMagica from "../assets/canecas-imagens/canecamagica.png"
import CanecaCromada from "../assets/canecas-imagens/canecacromada.png"
import CanecaComBombons from "../assets/canecas-imagens/canecacombombons.png"


function Canecas() {
    return(
        <div className={styles.sessaoCanecas}>
            <div>
                <img src={CanecaDeCerâmica} alt="Imagem de Caneca de cerâmica" />
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+de+Cer%C3%A2mica!"><p>Caneca de cerâmica</p></a>
                <h2>R$ 29,90-R$39,90 </h2>             
            </div>

            <div>
                <img src={CanecaDePolimero} alt="Caneca de Polímero" />
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+de+Pol%C3%ADmero!"><p>Caneca de Polímero</p></a>
                <h2>R$ 24,90</h2>                                                 
            </div>

            <div>
                <img src={CanecaMagica} alt="Imagem de Caneca Mágica" />
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+M%C3%A1gica!"><p>Caneca Mágica</p></a>
                <h2>R$ 49,90</h2>
            </div>

            <div>
                <img src={CanecaCromada} alt="Imagem de Caneca Cromada" />
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+Cromada!"><p>Caneca Cromada</p></a>
                <h2>R$ 49,90</h2>
            </div>

            <div>
                <img src={CanecaComBombons} alt="Imagem de Caneca de Cerâmica + Bombons" />
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Caneca+de+Cer%C3%A2mica+com+Bombons!"><p>Caneca de Cerâmica + Bombons</p></a>
                <h2>R$ 44,90</h2>
            </div>
        </div>
    )
}

export default Canecas;