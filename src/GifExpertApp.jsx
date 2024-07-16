import  { useState } from 'react';
import { AddCategory } from './components/AddCategory'

export const GiExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon ball']);

    const onAddCategory = (onNewCategory) => {
        // push no sirve porque muta el objeto --> hay que crear un nuevo objeto, no cambiarlo
        setCategories( [onNewCategory, ...categories] );
        // setCategories( cat => [...categories, 'Naruto'] ); --> otra forma
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
             // propiedades:
                //setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />
            
            {/* Listado de gif */}
            {/*<button onClick={ onAddCategory }>Agregar</button>*/}
            <ol> {/* Order List */}
                { categories.map( category => {
                    {/* console.log(categories) */}
                    return <li key={ category }>{ category }</li>
                }) }
            </ol>
                {/* Gif Item */}
        </>
    )
};