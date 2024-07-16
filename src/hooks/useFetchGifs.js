import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getFiles';

export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true) ;

  const getImages = async() => {// el useEffect no puede retornar una promesa, asi que no puede ser asincrono, por eso lo separamos a esto
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading( false );
  }

  useEffect( () => {
      getImages();
  }, []); // si no pones nada en las dependencias [], solo se ejecuta la primera vez
    
  return {
    images, // images: images
    isLoading
  }
}
