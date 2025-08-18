import './App.css'

// 2 - css de componente
import MyComponent from './components/MyComponent'

function App() {
  // 4 -css inline dinâmico
  const n = 15

  return (
    <div className="App">
      {/* 1 - Css global */}
      <h1>CSS no React</h1>
      {/* 2 - Css de componente */}
      <MyComponent />
      <p>Pegou o Css do componente</p>
      {/* 3 - inline style */}
      <p style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue" }}>
        Este elemento tem estilos inline
      </p>
      {/* 4 - inline style dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        Css dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        Css dinâmico 2
      </h2>
    </div>
  )
}

export default App
