//TEST DEL COMPONENTE CONTADOR
import {render,screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import Contador from '../../components/Contador';


const contador=20;
describe("Test de componente contador",()=>{
    test("debe de hacer match con el snapshot",()=>{
        const {container}=render(<Contador contador={contador}></Contador>);
        expect(container).toMatchSnapshot();
    }),
    test("Verificar que el valor de contador existe",()=>{
        const {container}=render(<Contador contador={contador}></Contador>)
        expect(screen.getByText(contador)).toBeTruthy()

    }),
    test("Verificar que el valor de contador se inicializa a 20",()=>{
        const {container}=render(<Contador contador={contador}></Contador>)
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain("20")

    }),
    test("Verificar que cuando se pulsa el botón +1 incrementa",()=>{
        const {container}=render(<Contador contador={contador}></Contador>)
        fireEvent.click(screen.getByText("+1"))
        expect(screen.getByText("21")).toBeTruthy()
    }),
    test("Verificar que cuando se pulsa el botón -1 decrementa",()=>{
        const {container}=render(<Contador contador={contador}></Contador>)
        fireEvent.click(screen.getByText("-1"))
        expect(screen.getByText("19")).toBeTruthy()
    }),
    test("Verificar que cuando se pulsa el botón Reset contador vuelve a 20",()=>{
        const {container}=render(<Contador contador={contador}></Contador>)
        fireEvent.click(screen.getByText("Reset"))
        expect(screen.getByText("20")).toBeTruthy()
        screen.debug()
    })
})
