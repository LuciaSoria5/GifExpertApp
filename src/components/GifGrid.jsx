import { getGifs } from "../helpers/getFiles";


export const GifGrid = ({ category }) => {
    
    getGifs(category);

  return (
    <>
        <h3>{ category }</h3>
       
    </>
  )
};
