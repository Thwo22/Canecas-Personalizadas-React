import './App.css'
import Header from "./components/Header.jsx"
import BannerTopo from './components/Banner-topo.jsx'
import Beneficios from './components/beneficios.jsx'
import SessaoCanecas from './components/Canecas.jsx'
import SessaoGarrafas from './components/Garrafas.jsx'
import SessaoXicaras from  './components/Xicaras.jsx'
import SessaoCopos from './components/Copos.jsx'
import Footer from './components/Footer.jsx'

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
          <SessaoGarrafas />
          <SessaoXicaras />
          <SessaoCopos />
        </div>
      </div>
      <div className='fim'>
        <Footer />
      </div>
    </>
  )
}

export default App
