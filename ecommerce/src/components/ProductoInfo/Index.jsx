//src/components/ProductoInfo

import React from 'react'

const ProductoInfo = () => {
    
    let nombre = "Pepe Argento";
    let trabajo = "Zapateria";
    let mensaje = `${nombre} trabaja en una ${trabajo}`;

    //Operador Ternario:
    let llueve = true;
    let respuesta = llueve ? "Entrá el auto" : "Dejá el auto afuera";

    //Operador Spread: Operación de propagación
    //Se utilizar con elementos iterables.
    const nombres = ["Juan","Pedro","María","Jose"];
    console.log(nombres);
    console.log(...nombres);
    console.log(nombres[0],nombres[1],nombres[2],nombres[3]);

    //Copiar objetos: 
    const alumno = {
        nombre: "",
        apellido:"",
        edad: 37
    }
    
    //No puedo hacer esto.
    const alumnoDos = alumno; //La variable alumno se copia, pero tomá el 
                              //valor valor en memoria de alumnodos, por lo tanto, 
                              //las dos tienen la misma referencia de datos.
                              //Ejemplo: alumnoDos tiene el espacio en memoria 010010 al iguarlo con 
                              //alumno, este también pasa a tener el mismo valor en memoria: 010010
                              //por lo tanto, cambia una y cambia en todos los que se igualaron.
    alumno.nombre ="Tomas";

    console.log(alumno); 
    console.log(alumnoDos);

    //¿Para copiar objetos de forma correcta?
    const alumnoTres = {...alumno}; //De esta manera cada variable u objeto posee un número propio
                                    //de espacio en memoria. A partir de acá son totalmente independiente.

    //Para copiar arrays
    const a = [0,1,2,3];
    const b = [4,5,6];
    const nuevoArray = [...a,...b];
    const nuevoArrayEspejo = [...b,...a];
    console.log(nuevoArray);
    console.log(nuevoArrayEspejo);

    //Desectructuración de Objetos
    const bart = {
        nombre: "Bart",
        apellido: "Simpson",
        edad:10
    }
    let {nombre:name, apellido, edad} = bart;

    console.log(name);
    console.log(apellido);
    console.log(edad);

    //Desestructurar arrays
    let frutas = ["Manzana","Pera","Naranjas","Vino"];
    let [frutas0,frutas1,frutas2,frutas3] = frutas;
    console.log(frutas0);
    console.log(frutas1);

    let [ ,,fru2,fru3]=frutas;
    console.log(fru2);
    console.log(fru3);

    //Acceso condicional a un objeto
    let empleados = {
    }
    //console.log(empleados.nombre); Esto va a tirar error!!!

    let empleado = null;
    console.log(empleado?.nombre);//Esto es un condicional. Si no viene nada, el sistema no se rompe.


  return (
    <div>
        <h1>Remera Kotlin</h1> 
        <p>{mensaje}</p>
        <p>{respuesta}</p>
        <p>{...nombres}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus recusandae et consequuntur, facere velit quibusdam pariatur fugit expedita consequatur reiciendis tenetur adipisci placeat praesentium distinctio magni nostrum accusantium ea ducimus!</p>
    </div>
  )
}

export default ProductoInfo