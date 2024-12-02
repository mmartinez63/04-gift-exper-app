// import { useState, useEffect } from "react"

// import { getGifs } from "../helpers/GetGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  //** */ USO DE HOOKS PERSONALIZADOS **

    const { images, isLoading } = useFetchGifs( category );

    console.log({ isLoading });



  // const [counter, setCounter] = useState(10);

    

  return (
    <>
        <h3>{ category }</h3>
        {
          // isLoading ? (<h2>Cargando...</h2>) : null
          isLoading && (<h2>Cargando...</h2>)
        }

        {/* <h5>{ counter }</h5>
        <button onClick={ () => setCounter( counter + 1) }>+1</button> */}

        {/* la iteración del objeto images puede expresarse asi:   
        <ol>
          { images.map( img => {
            return (<li key={ img.id }>{ img.title }</li>)
          } ) }
        </ol>
        */}

        {/* También se podría expresar así la iteración del objeto */}
        <div className="card-grid">
          { images.map( ( image ) => 
             (<GifItem key={ image.id } { ... image } />)  //? Aquí exparcimos las propiedades del objeto {image}
           ) }
        </div>

    </>

  )
}
