import { GifItem } from "../../src/components/GifItem";
import { getAllByAltText, getAllByText, render, screen } from "@testing-library/react";

describe('Pruebas en el  componente GitItem', () => { 
    
    const title = "Naruto";
    const url = "https://naruto.com/naruto.jpg";
    const id = 1;

    test('Debe hacer match con el snapshot ', () => { 
        const { container } = render( <GifItem title={ title } url={ url } id={ id } />);
        expect( container ).toMatchSnapshot();
     });

     test('Debe mostrar la imagen con el URL y el alt indicado', () => { 
        const { container } = render( <GifItem title={ title } url={ url } id={ id }/>);
        
        //expect( screen.getByRole('img').src ).toBe( url );
        //expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
      });

      test('Debe mostrar el titulo en el componente', () => { 
        const { conteiner } = render( <GifItem title={ title } url={ url } id={ id }/>);
        expect( screen.getByText( title )).toBeTruthy();

       })

 });