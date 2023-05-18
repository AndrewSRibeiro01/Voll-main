import styled from 'styled-components'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import whatsapp from './assets/whatsapp.png'
import instagram from './assets/instagram.png'


const Background = styled.div`
    width: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
    height: 100%;

`
const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: center;
`

const ListaEstilizada = styled.ul`
    display: flex;
`

const ItemEstilizado = styled.li`
    list-style-type: none;
`

function Rodape() {
    return (
        <Background>
            <RodapeEstilizado>
                <ListaEstilizada>
                    <ItemEstilizado>
                        <a href='#'>
                            <img src={facebook} alt='logo do facebook' />

                        </a>
                    </ItemEstilizado>
                </ListaEstilizada>
                <ListaEstilizada>
                    <ItemEstilizado>
                        <a href='#'>
                            <img src={google} alt='logo do google' />

                        </a>
                    </ItemEstilizado>
                </ListaEstilizada>
                <ListaEstilizada>
                    <ItemEstilizado>
                        <a href='#'>
                            <img src={whatsapp} alt='logo do whatsapp' />

                        </a>
                    </ItemEstilizado>
                </ListaEstilizada>
                <ListaEstilizada>
                    <ItemEstilizado>
                        <a href='#'>
                            <img src={instagram} alt='logo do instagram' />

                        </a>
                    </ItemEstilizado>
                </ListaEstilizada>
            </RodapeEstilizado>
            <p>2023 Desenvolvido por Alura | Projeto fictício sem fins comerciais</p>
        </Background>
    )
}

export default Rodape