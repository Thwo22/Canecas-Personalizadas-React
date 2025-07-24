import Header_route from "../routes/components_routes/header_routes";
import Album from "../routes/components_routes/album"

function Galeria() {
    return(
        <>
        <header>
            <Header_route />
        </header>
        <div>
            <Album />
        </div>
        </>
    )
}

export default Galeria;