import { useState } from 'react';



//? export const AddCategory = ({ setCategories }) => {
export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {

        // console.log(event.target.value);

        setInputValue(event.target.value);

    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue);

        if( inputValue.trim().length <= 1 ) return;

        // setCategories( cat => [inputValue, ...cat] );
        onNewCategory(inputValue.trim());

        // Limpiamos nuestro inputValue:

        setInputValue('');
    };

  return (

    // hay dos formas de escribir el retorno del componente. Una es la extendida:

    // <form onSubmit={ (e) => onSubmit(e) }>
    //     <input type="text" placeholder="Buscar gifs" value={ inputValue } onChange={ (event) => onInputChange(event) } />
    // </form>

    //* Y la otra es la resumida:

    <form onSubmit={ onSubmit }>
    <input type="text" placeholder="Buscar gifs" value={ inputValue } onChange={ onInputChange } />
    </form>
    
  )
}
