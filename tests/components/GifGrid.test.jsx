import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs'); // vamos a mockear esto 

describe('Pruebas en <GifGrid />', () => { 
    const category = 'Naruto';

    test('Debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({ // simuloacion de lo que retorna la funcion
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);

        expect( screen.getByText( 'Cargando imágenes...' ));
        expect( screen.getByText( category ));
     });

     test('Debe mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => { 
        const gifs = [
            {
            id: 'ABC',
            title: 'Naruto',
            url: 'https://naruto.com/naruto.jpg'
            },
            {
                id: 'DEF',
                title: 'Hinata',
                url: 'https://naruto.com/hinata.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);
      });
 });