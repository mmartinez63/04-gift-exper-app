
//? import React from 'react'; //* Después de la versión 17 de React, esta línea ya no es necesaria.
//? import { GifGrid } from './components/GifGrid';

import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['One Ponch'] );
  // console.log(categories);

  const onAddCategory = ( value ) => {

    if( categories.includes( value ) ) return; // Candado que impide que se registren nombres iguales...

      // setCategories(categories.push('Lola traviesa!!!')); // <- Esta forma no está permitida

      //* Hay varias formas de hacerlo:
      // setCategories([...categories, 'Lola traviesa!!!' ]);
      setCategories( cat => [ value, ...cat ]);
  };

  return (
    <>
    {/* Sección de Títulos */}
        <h1>GiftExpertApp</h1>

        {/* Sección de Input */}
        {/* Se pueden mandar todo tipo de parámetros al llamar a un componente: strings, numbers, functions */}
        <AddCategory 
          // setCategories = { setCategories } 
          onNewCategory = { (value) => onAddCategory(value) }

        />

        {/* Sección de Listados */}

        {/* <button onClick={ onAddCategory }>Add category</button> */}


      { categories.map( (category) => (
          <GifGrid key={ category } category={ category }/>
        ))
      }

        {/* gift item */}

    </>
  )
}
