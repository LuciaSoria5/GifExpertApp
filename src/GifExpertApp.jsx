import  { useState } from "react";

export const GiExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon ball']);

    const onAddCategory = () => {
        categories.push('Naruto')
        setCategories();
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            <button onClick={ onAddCategory }>Agregar</button>
            
            {/* Input */}

            {/* Listado de gif */}
            <ol> {/* Order List */}
                { categories.map( category => {
                    {console.log(categories)}
                    return <li key={ category }>{ category }</li>
                }) }
            </ol>
                {/* Gif Item */}
        </>
    )
};