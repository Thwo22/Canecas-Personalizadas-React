import styles from "./modules/sessoes.module.css"
import GarrafaDeAluminio500ml from "../assets/garrafas-imagem/garrafa-de-aluminio500ml.png"
import GarrafaDeAluminio750ml from "../assets/garrafas-imagem/garrafa-de-aluminio750ml.png"
import GarrafaSqueezeBranca500ml from "../assets/garrafas-imagem/garrafa-squeeze500.png"
import GarrafaSqyeezeBranca750ml from "../assets/garrafas-imagem/garrafa-squeeze750.png"


function Garrafas() {
    return(
        <div className={styles.sessaoGarrafas}>
            <div className={styles.title_black}>
                <h1>Garrafas</h1>
                <p>Personalizáveis</p>
            </div>


            <div className={styles.grid}>
                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Garrafa+de+Alum%C3%ADnio+500ml!">
                    <div className={styles.produtos}>
                        <img src={GarrafaDeAluminio500ml} alt="Imagem de Garrafa De Alumínio (500ml)" />
                        <p>Garrafa De Alumínio (500ml)</p>
                        <p className={styles.preco}>R$ 41,90 </p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Garrafa+de+Alum%C3%ADnio+750ml!">
                    <div className={styles.produtos}>
                        <img src={GarrafaDeAluminio750ml} alt="Imagem de Garrafa De Aluminio (750ml)" />
                        <p>Garrafa De Aluminio (750ml)</p>
                        <p className={styles.preco}>R$ 49,90</p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Garrafa+Squeeze+Branca+500ml!">
                    <div className={styles.produtos}>
                        <img src={GarrafaSqueezeBranca500ml} alt="Imagem de Garrafa Squeeze Branca (500ml)" />
                        <p>Garrafa Squeeze Branca (500ml)</p>
                        <p className={styles.preco}>R$ 41,90</p>
                    </div>
                </a>

                <a href="https://wa.me/5511952493394?text=Ol%C3%A1,+Geovana!+Tenho+interesse+em+uma+Garrafa+Squeeze+Branca+750ml!">
                    <div className={styles.produtos}>
                        <img src={GarrafaSqyeezeBranca750ml} alt="Imagem de Garrafa Squeeze Branca" />
                        <p>Garrafa Squeeze Branca (750ml)</p>
                        <p className={styles.preco}>R$ 49,90</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Garrafas;