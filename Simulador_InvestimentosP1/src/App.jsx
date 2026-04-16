import { useState } from 'react'
import CapturaDados from './components/CapturaDados.jsx'

function App() {
  const [valorInicial, setValorInicial] = useState('')
  const [aporteMensal, setAporteMensal] = useState('')
  const [taxaJuros, setTaxaJuros] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcularSimulacao = () => {
  const P = parseFloat(valorInicial)
  const A = parseFloat(aporteMensal)
  const i = parseFloat(taxaJuros) / 100
  const n = parseInt(periodo)

  if (isNaN(P) || isNaN(A) || isNaN(i) || isNaN(n) || n <= 0) {
    alert('Preencha os campos corretamente.')
    return
  }

  let valorFinal = 0

  if (i === 0) {
    valorFinal = P + A * n
  } else {
    valorFinal = P * Math.pow(1 + i, n) + A * ((Math.pow(1 + i, n) - 1) / i)
  }

  const totalInvestido = P + A * n
  const jurosAcumulados = valorFinal - totalInvestido
  const rentabilidade =
    totalInvestido > 0 ? (jurosAcumulados / totalInvestido) * 100 : 0

  const novoResultado = {
    valorFinal,
    totalInvestido,
    numeroAportes: n,
    jurosAcumulados,
    rentabilidade,
  }
  console.log(novoResultado)
  setResultado(novoResultado)
  }

  const limparCampos = () => {
  setValorInicial('')
  setAporteMensal('')
  setTaxaJuros('')
  setPeriodo('')
  setResultado(null)
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="mb-2">Hello, Investimentos</h1>
          <p className="text-muted">
            Descubra quanto seu dinheiro pode render com juros compostos.
          </p>

          <CapturaDados
            valorInicial={valorInicial}
            setValorInicial={setValorInicial}
            aporteMensal={aporteMensal}
            setAporteMensal={setAporteMensal}
            taxaJuros={taxaJuros}
            setTaxaJuros={setTaxaJuros}
            periodo={periodo}
            setPeriodo={setPeriodo}
            aoCalcular={calcularSimulacao}
            aoLimpar={limparCampos}
          />
        </div>
      </div>
    </div>
  )
}

export default App