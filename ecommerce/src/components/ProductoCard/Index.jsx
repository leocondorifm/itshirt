import React from 'react'
import ProductoImagen from '../ProductoImagen/Index';
import ProductoInfo from '../ProductoInfo/Index';
import ProductoBoton from '../ProductoBoton/Index';

const ProductoCard = () => {
  return (
    <div>
        <ProductoImagen/>
        <ProductoInfo/>
        <ProductoBoton/>
    </div>
  )
}

export default ProductoCard