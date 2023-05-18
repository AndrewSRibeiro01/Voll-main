import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfissional";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
    flex: 40%;
    max-width: 100%;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
    display: flex;
`
const UlEstilizado = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-grow: 0;
    box-sizing: border-box;
    width: 100%;
    padding-left: 20px;
`
const ImagemEstilizada = styled.img`
    width: 64px;
    height: 64px;
    border: 2px solid #339CFF;
    border-radius: 50px;
`
const LiEstilizada = styled.li`
    align-self: center;
    list-style:none;
`

function Card({ profissional }: { profissional: IProfissional }) {
    return (
        <ContainerEstilizado>
            <UlEstilizado style={{ justifyContent: "initial" }}>
                <LiEstilizada>
                    <ImagemEstilizada src={profissional.imagem}
                        alt={`foto de perfil do profissional $ {profissional.nome}`} />
                </LiEstilizada>
                <LiEstilizada>
                    <p>{profissional.nome}</p>
                    <p>{profissional.especialidade}</p>
                </LiEstilizada>
            </UlEstilizado>
            <UlEstilizado style={{ justifyContent: "center" }}>
                <LiEstilizada>
                    <Rating
                        name="simple-controlled"
                        value={profissional.nota}
                        readOnly={true}
                    />
                </LiEstilizada>
            </UlEstilizado>
        </ContainerEstilizado>
    )
}

export default Card;