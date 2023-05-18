import './App.css';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo/assets';
import useDadosConsulta from './UseDadosConsulta';
import useDadosProfissional from './UseDadosProfissional';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';


function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição!")
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo><AssignmentIndIcon style={{ paddingRight: '10px', margin: "-3px" }} />Consultas do dia</Titulo>
        <Tabela consultas={consultas} />
        <Botao>Ver mais</Botao>
        <Titulo><TrendingUpIcon style={{ paddingRight: '10px', margin: "-3px" }} />Consultas mensais por especialistas</Titulo>
        <Subtitulo>Março/23</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo><MedicationLiquidIcon style={{ paddingRight: '10px', margin: "-3px" }} />Avaliação de especialistas</Titulo>
        <Subtitulo>Março/23</Subtitulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;

