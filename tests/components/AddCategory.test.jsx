import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => { 

    const inputValue = 'Naruto';

    test('Debe cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} }/> );
        
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: {value: inputValue } } );
        
        expect( input.value ).toBe( 'Naruto' );
     });

     test('Debe llamar onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn(); // funcion ficticia
        render( <AddCategory onNewCategory={ onNewCategory }/> );
        
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: {value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe( '' ); // despues de enviar el form, el input se vacia
        //expect( onNewCategory ).toHaveBeenCalled(); // evaluamos que se haya llamado esta funcion luego del submit
        //expect( onNewCategory ).toHaveBeenCalledTimes(1); // evaluamos que se haya llamado una sola vez
        expect( onNewCategory ).toHaveBeenCalledWith( 'Naruto' ); // evaluamos que se haya llamado esta funcion con ese parametro luego del submit
    });

    test('No debe llamar onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/> );
        
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: {value: "" } } );
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        //expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });

 })