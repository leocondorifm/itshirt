
import ProductoCard from './components/ProductoCard/Index'; //Invoco el Componente Producto.
import React from 'react'; //No es obligatorio, podría no estar. En versiones anteriores era necesario.
import './App.css'; //Importar CSS para mi módulo.

const App = () => {
  //let profesor = "Samuel Romero";

  return (
    <>
        {
          <ProductoCard/>
        /*
          <h1>Hola Mundo</h1>
          <h2 className='subtitulo'>{profesor}</h2>
          <h3 style={{color: "blue"}}>La edad es: { 37 + 4 }</h3>
        */
        }
    </>
  )
}

export default App