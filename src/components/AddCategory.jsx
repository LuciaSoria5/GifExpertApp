import { useState } from 'react';


export const AddCategory = ( { onNewCategory } ) => { //onNewCategory es una funcion. La invocamos cuando el usuario presiona enter
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value); // lo que escribe el usuario
    };

    const onSubmit = (event) => {
        event.preventDefault(); // para que no recargue cuando enviamos el form
        if (inputValue.trim().length <= 1) return; // evitar inputs vacios
        //setCategories( categories => [inputValue, ...categories] ); --> esto es si le pasas el setCategories como prop
        
        setInputValue(''); // limpiamos el input value --> se ejecuta al final, porque es un set
        onNewCategory( inputValue.trim() );
    };
    
    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange /* para capturar los cambios en el text box*/} 
            
            />
        </form>
    )
}
