import IConsulta from "./types/IConsulta"
import useFetc from "./useFetch"

const useDadosConsulta = () => {
    return useFetc<IConsulta[]>({ url: 'consultas' })
}

export default useDadosConsulta