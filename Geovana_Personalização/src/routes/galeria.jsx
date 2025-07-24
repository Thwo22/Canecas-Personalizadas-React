import Header_route from "../routes/components_routes/header_routes";
import Album from "../routes/components_routes/album"

function Galeria() {
    return(
        <>
        <div>
            <Header_route/>
        </div>
        <div>
            <Album />
        </div>
        </>
    )
}

export default Galeria;