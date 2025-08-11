import './App.css'

// 2 - imagem em assets
import dia from './assets/img1.jpg';

// 3 - useState
import Data from './components/Data';

// 4 - renderização de lista
import ListRender from './components/ListRender';

function App() {
  return (
      <div className="App" style={{paddingBottom: "500px"}}>
        <h1>Avançando em React !</h1>
        {/* 1 - Imagem em public */}
        <img src="/Ibirapuera_Sampa.jpg" alt="Alguma imagem" />
        {/* 2 - Imagem em assets */}
        <img src={dia} alt="Outra imagem" />
        {/* 3 - UseState */}
        <Data />
        {/* 4 - render de lista */}
        <ListRender />
      </div>
  )
}

export default App
