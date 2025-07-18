import BannerTopoImg from "../assets/banners/GEOVANAPERSONALIZACAO.png"
import styles from "./modules/bannerTopo.module.css"

function BannerTopo() {

    return (
        <div className={styles.BannerTopo}>
            <img src={BannerTopoImg} alt="Banner principal" />
        </div>
    )
}

export default BannerTopo;