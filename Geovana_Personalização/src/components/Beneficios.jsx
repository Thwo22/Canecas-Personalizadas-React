import descontoImg from "../assets/icons/desconto-logo.png"
import envioImg from "../assets/icons/envio-logo.png"
import carteiraImg from "../assets/icons/carteira-logo.png"
import styles from "../components/modules/beneficios.module.css"

function Beneficios() {
    return (
        <section className={styles.container_section}>
            <div>
                <img src={descontoImg} alt="imagem de desconto" />
                <p>Desconto em pagamento imediato</p>
            </div>

            <div>
                <img src={carteiraImg} alt="imagem de carteira" />
                <p>Iniciamos a personalização com 50% de entrada</p>
            </div>

            <div>
                <img src={envioImg} alt="imagem de envio" />
                <p>Receba sua Caneca via Uber Entregas</p>
            </div>
        </section>
    )
}

export default Beneficios;