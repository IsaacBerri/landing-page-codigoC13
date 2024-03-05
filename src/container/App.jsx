import Header from '../components/Header'
import DiegoArias from '../components/jornada-am/DiegoArias.jsx'
import IsaacBerrio from '../components/jornada-am/IsaacBerrio.jsx'
import JuanValencia from '../components/jornada-am/JuanValencia.jsx'
import IvanDario from '../components/jornada-pm/IvanDario.jsx'
import SamuelZapata from '../components/jornada-pm/SamuelZapata.jsx'
import SantiagoGallego from '../components/jornada-pm/SantiagoGallego.jsx'
import '../styles/App.css'

function App() {

  return (
    <>
      <Header/>
      <JuanValencia/>
      <IvanDario/>
      <SamuelZapata/>
      <IsaacBerrio/>
      <DiegoArias/>
      <SantiagoGallego/>
    </>
  )
}

export default App
