import { useState } from 'react';

const HookUseState = () => {
    // 1 - useState
    let userName = "Maicon"
    const [name, setName] =useState("Patrick");

    const changeNames = () => {
        userName = "Maicon da silva";

        setName("Patrick Corrêa");
    };

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
    </div>
  )
}

export default HookUseState