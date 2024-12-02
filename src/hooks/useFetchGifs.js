import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";



export const useFetchGifs = ( category ) => {

  //gatito-> Recuerda que cuando un componente se carga x primera vez los valores iniciales de los hooks, se mandan con useState(valor inicial)

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
      const newImages = await getGifs( category ); //* Devuelve un array de objetos.
      setImages( newImages ); //* Con esta instrucción se recarga el componente
      setIsLoading( false ); //* Si hay mas funciones setFuncion(), a patir de la versión 18 de react-js, el componente solo dispara una renderización. 
    };
  
    //? Si no especificamos un 2do argumento, la función getGifs() se va a ejecutar siempre
    //? Si el segundo argumento es un array vacio, la func getGifs() se va a ejecutar una sola vez y sólo para el último estado de {category}.
    useEffect( () => { getImages(); }, [] ); 

    return {
        images,
        isLoading
      } 
  
}
