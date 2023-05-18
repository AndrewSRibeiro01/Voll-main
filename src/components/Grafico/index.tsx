import { ResponsiveContainer } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { BarChart } from "recharts";
import { Bar } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";
import useDadosGrafico from "./useDadosGrafico";
import styled from "styled-components";

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null
}

interface IDados {
    nome: string,
    consultas: number
}

const SecaoEstilizada = styled.section`
    background: var(--branco);
    border-radius: 16px;
`

function Grafico({ profissionais, consultas }: Props) {
    let dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });
    console.log(dados);
    return (
        <SecaoEstilizada>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    layout="vertical"
                    data={dados}
                    margin={{ top: 25, right: 40, left: 40, bottom: 20 }}>
                    <XAxis type="number" dataKey="consultas"></XAxis>
                    <YAxis type="category" dataKey="nome"></YAxis>
                    <Bar dataKey="consultas" fill="#083860" barSize={30}
                    />
                </BarChart>
            </ResponsiveContainer>
        </SecaoEstilizada>
    )
}

export default Grafico;