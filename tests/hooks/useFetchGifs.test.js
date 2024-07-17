import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el Hook useFetchGifs', () => { 
    
    test('Debe regresar el estado inicial', () => { // a penas se llama el hook
        const { result } = renderHook( () => useFetchGifs( 'Naruto' ));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy;
     });

     test('Debe retornar un arreglo de imagenes y isLoading en false', async() => { // cuando termina el hook
        const { result } = renderHook( () => useFetchGifs( 'Naruto' ));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
            //, { timeout=1000} opcional --> espera un segundo)
        );
        
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy;

      });
 });