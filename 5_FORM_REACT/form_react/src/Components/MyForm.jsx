import "./MyForm.css";

const MyForm = () => {

  return (
    <div>
      {/* 1 - Criação de form */}
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
        {/* 2 - Label envolvendo um input */}
        <label>
            <span>E-mail:</span>
            <input type="text" name="email" placeholder="Digite seu e-mail" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
