import  { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        // push no sirve porque muta el objeto --> hay que crear un nuevo objeto, no cambiarlo
        if ( categories.includes(newCategory) ) return;
        setCategories( [newCategory, ...categories] );
        // setCategories( cat => [...categories, 'Naruto'] ); --> otra forma
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
             // propiedades:
                //setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />
            {/* React usa la key para saber cuando un elemento se elimino, asi que no hay que usar un indice */}
            { categories.map( category => 
                <GifGrid key={ category } category={ category }
                /> )}
        </> )
};