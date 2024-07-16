import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getFiles";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
  }

  useEffect( () => {
      getImages();
  }, []); // si no pones nada en las dependencias [], solo se ejecuta la primera vez
    

  return (
    <>
        <h3>{ category }</h3>

        <div className="card-grid"> 
            { images.map( ( image ) => 
                ( <GifItem 
                  key={ image.id }
                  { ...image } // esparcimos las propiedades de image
                /> )
            )}
        </div>
    </>
  )
};
