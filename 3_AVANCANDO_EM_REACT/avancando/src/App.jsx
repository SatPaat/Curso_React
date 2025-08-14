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

// 11 - renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Vermelho", km: 0 },
  { id: 2, brand: "Bugatti", color: "amarelo", km: 45021 },
  { id: 3, brand: "Porsche", color: "preto", km: 5000 },
];

// 12 - fragments
import Fragments from './components/Fragments';

// 13 - children
import Container from './components/Container';

// 14 Função em prop
import ExecuteFunction from './components/ExecuteFunction'; 

// 15 - state lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {

  // 14 - função em prop
  function showMessage (){
    console.log("Evento do componete pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
      <CarDetails brand="VW" km={999} color="Vermelho" />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={21134} color="Preto" />
      <CarDetails brand="Kia" km={4218} color="Branco" />
      {/* 11 - renderização de listas com componentes */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km} />
      ))}
      {/* 12 - Fragments */}
      <Fragments/>
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h3>Teste</h3>
          <p>Meu container</p>
        </div>
      </Container>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* 15 - state lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
