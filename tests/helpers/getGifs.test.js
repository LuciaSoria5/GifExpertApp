import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => { 

    test('Debe retornar un arreglo de gifs', async() => { 
        const gifs = await getGifs('One punch');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({ // evaluamos que tenga esta estructura
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
     });

 });