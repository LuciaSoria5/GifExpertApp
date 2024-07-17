const { render, screen, fireEvent } = require("@testing-library/react");
const { GifExpertApp } = require("../src/GifExpertApp");


describe('Prueba en <GifExpertApp />', () => { 
    
    test('Debe matchear con el snapchot', () => { 
        const { container } = render(<GifExpertApp />);
        expect( container ).toMatchSnapshot();
     });

     test('Se debe agregar una nueva categoria', () => { 
        const { container } = render(<GifExpertApp />);
        const categoria = 'Naruto';

        const input = screen.getByRole('textbox');
        const form = screen.getByRole( 'form' );

        fireEvent.input(input, { target: { value: categoria } });
        fireEvent.submit(form);

        expect( screen.getAllByText(categoria).length ).toBe( 1 );
      });

      test('No se deben agregar categorias repetidas', () => { 
        const { container } = render(<GifExpertApp />);
        const categoria = 'Spy x Family';
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole( 'form' );

        fireEvent.input(input, { target: { value: categoria } });
        fireEvent.submit(form);

        expect( screen.getAllByText(categoria).length ).toBe( 1 );
      });
 });