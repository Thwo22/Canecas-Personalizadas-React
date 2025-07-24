import styles from "../css_routes/album.module.css"
import caneca1 from "../assets_routes/produtos_imagens/1.jpg"
import caneca2 from "../assets_routes/produtos_imagens/2.jpg"
import caneca3 from "../assets_routes/produtos_imagens/3.jpg"
import caneca4 from "../assets_routes/produtos_imagens/4.jpg"
import caneca5 from "../assets_routes/produtos_imagens/5.jpg"
import caneca6 from "../assets_routes/produtos_imagens/6.jpg"
import caneca7 from "../assets_routes/produtos_imagens/7.jpg"
import caneca8 from "../assets_routes/produtos_imagens/8.jpg"
import caneca9 from "../assets_routes/produtos_imagens/9.jpg"
import caneca10 from "../assets_routes/produtos_imagens/10.jpg"
import caneca11 from "../assets_routes/produtos_imagens/11.jpg"
import caneca12 from "../assets_routes/produtos_imagens/12.jpg"
import caneca13 from "../assets_routes/produtos_imagens/13.jpg"
import caneca14 from "../assets_routes/produtos_imagens/14.jpg"
import caneca15 from "../assets_routes/produtos_imagens/15.jpg"
import caneca16 from "../assets_routes/produtos_imagens/16.jpg"
import caneca17 from "../assets_routes/produtos_imagens/17.jpg"
import caneca18 from "../assets_routes/produtos_imagens/18.jpg"
import caneca19 from "../assets_routes/produtos_imagens/19.jpg"
import caneca20 from "../assets_routes/produtos_imagens/20.jpg"
import caneca21 from "../assets_routes/produtos_imagens/21.jpg"
import caneca22 from "../assets_routes/produtos_imagens/22.jpg"
import caneca23 from "../assets_routes/produtos_imagens/23.jpg"
import caneca24 from "../assets_routes/produtos_imagens/24.jpg"
import caneca25 from "../assets_routes/produtos_imagens/25.jpg"
import caneca26 from "../assets_routes/produtos_imagens/26.jpg"
import caneca27 from "../assets_routes/produtos_imagens/27.jpg"
import caneca28 from "../assets_routes/produtos_imagens/28.jpg"
import caneca29 from "../assets_routes/produtos_imagens/29.jpg"
import caneca30 from "../assets_routes/produtos_imagens/30.jpg"

const canecas = [
    caneca1, caneca2, caneca3, caneca4,
    caneca5,
    caneca6,
    caneca7,
    caneca8,
    caneca9,
    caneca10,
    caneca11,
    caneca12,
    caneca13,
    caneca14,
    caneca15,
    caneca16,
    caneca17,
    caneca18,
    caneca19,
    caneca20,
    caneca21,
    caneca22,
    caneca23,
    caneca24,
    caneca25,
    caneca26,
    caneca27,
    caneca28,
    caneca29,
    caneca30,
]

function Album() {
    return (
        <div className={styles.grid_album}>
            <div className={styles.title_p}>
                <h1>NOSSOS PRODUTOS!</h1>
                <p>Veja Alguns dos Nossos Produtos Personalizados e Entregues!</p>
            </div>
            <div className={styles.canecas_images}>
                {canecas.map((img, index) => (
                    <img key={index} src={img} alt={`Caneca ${index + 1}`}/>
                ))}
            </div>
        </div>
    )
}

export default Album;
