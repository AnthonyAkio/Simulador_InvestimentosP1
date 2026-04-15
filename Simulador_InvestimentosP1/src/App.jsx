import { useState } from 'react'
import CapturaDados from './components/CapturaDados.jsx'

function App() {
  const [valorInicial, setValorInicial] = useState('')
  const [aporteMensal, setAporteMensal] = useState('')
  const [taxaJuros, setTaxaJuros] = useState('')
  const [periodo, setPeriodo] = useState('')

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
            aoCalcular={() => {}}
            aoLimpar={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default App