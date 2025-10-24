// 3 - alterando valor do contexto
import { useContext } from "react";
import ChangeContext from "../components/ChangeContext";

import {CounterContext} from '../context/CounterContext';

const Home = () => {

  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeContext />
    </div>
  )
}

export default Home