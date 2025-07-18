import './App.css'
import Header from "./components/Header.jsx"
import BannerTopo from './components/Banner-topo.jsx'
import Beneficios from './components/beneficios.jsx'
import SessaoCanecas from './components/Canecas.jsx'

function App() {

  return (
    <>
      <div className="topo">
        <Header/>
        <BannerTopo/>
      </div>
      <div className="divisor">
        <Beneficios />
      </div>
      <div className='container-vitrine'>
        <div>
          <SessaoCanecas />
        </div>
      </div>
    </>
  )
}

export default App
