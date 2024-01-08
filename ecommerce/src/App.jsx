import React from 'react'
import './App.css';

const App = () => {
  let profesor = "Leo";

  return (
    <div>
      <h1>Hola Mundo desde el localhost:</h1>
      <h2 className='subtitulo'>{profesor}</h2>
      <h3 style={{color:"blue"}}>la edad es: {24 + 19}</h3>
      {/* esto es un comentario */}
    </div>
  )
}

export default App