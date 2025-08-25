import "./MyForm.css";

import { useState } from "react";

const MyForm = ({userName, userEmail}) => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // 5 - Envio de form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email)

    // Validação
    // Envio

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }

  console.log(name, email, bio);

  return (
    <div>
      {/* 1 - Criação de form */}
      {/* 5 - Envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} 
          // 6 - controlled input
          value={name || ""}
          />
        </div>
        {/* 2 - Label envolvendo um input */}
        <label>
          <span>E-mail:</span>
          {/* 4 - simplificando manipulação */}
          <input type="text" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}
          // 6 - controlled input
          value={email || ""}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)}
            value={bio}
            ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Funcção no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
