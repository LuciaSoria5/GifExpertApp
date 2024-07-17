import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  // Custom Hook --> empiezan con "use":
  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
        <h3>{ category }</h3>
        
        {
          isLoading && <h2>Cargando imágenes...</h2> // ternario cuando el else es vacio
        }

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}