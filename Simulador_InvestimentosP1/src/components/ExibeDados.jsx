function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function ExibeDados({ resultado }) {
  if (!resultado) {
    return null
  }

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">Resultado da simulação</h2>

        <h3 className="display-6 text-success mb-4">
          {formatarMoeda(resultado.valorFinal)}
        </h3>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <strong>Total investido</strong>
            <div>{formatarMoeda(resultado.totalInvestido)}</div>
          </div>

          <div className="col-12 col-md-6">
            <strong>Juros acumulados</strong>
            <div>{formatarMoeda(resultado.jurosAcumulados)}</div>
          </div>

          <div className="col-12 col-md-6">
            <strong>Número de aportes</strong>
            <div>{resultado.numeroAportes}</div>
          </div>

          <div className="col-12 col-md-6">
            <strong>Rentabilidade</strong>
            <div>{resultado.rentabilidade.toFixed(2)}%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExibeDados