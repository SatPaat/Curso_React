import './App.css'

// 2 - imagem em assets
import dia from './assets/img1.jpg';

// 3 - useState
import Data from './components/Data';

// 4 - renderização de lista
import ListRender from './components/ListRender';

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName';

// 9 - desestruturando props
import CarDetails from './components/CarDetails';

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React !</h1>
      {/* 1 - Imagem em public */}
      <img src="/Ibirapuera_Sampa.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={dia} alt="Outra imagem" />
      {/* 3 - UseState */}
      <Data />
      {/* 4 - render de lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Patrick" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho"/>
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={21134} color="Preto"/>
      <CarDetails brand="Kia" km={4218} color="Branco"/>
    </div>
  )
}

export default App
