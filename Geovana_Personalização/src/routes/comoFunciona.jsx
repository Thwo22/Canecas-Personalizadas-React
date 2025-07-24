import Header_route from "../routes/components_routes/header_routes";
import Tutorial_route from "./components_routes/tutorial_routes";

function ComoFunciona() {
    return(
    <>
        <header>
            <Header_route/>
        </header>
        <div >
            <Tutorial_route />
        </div>
    </>
    )
}

export default ComoFunciona;