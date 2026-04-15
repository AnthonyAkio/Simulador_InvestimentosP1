function CapturaDados({
  valorInicial,
  setValorInicial,
  aporteMensal,
  setAporteMensal,
  taxaJuros,
  setTaxaJuros,
  periodo,
  setPeriodo,
  aoCalcular,
  aoLimpar,
}) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">Dados da simulação</h2>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label className="form-label">Valor inicial (R$)</label>
            <input
              type="number"
              className="form-control"
              value={valorInicial}
              onChange={(e) => setValorInicial(e.target.value)}
              placeholder="1000"
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label">Aporte mensal (R$)</label>
            <input
              type="number"
              className="form-control"
              value={aporteMensal}
              onChange={(e) => setAporteMensal(e.target.value)}
              placeholder="300"
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label">Taxa de juros (% ao mês)</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={taxaJuros}
              onChange={(e) => setTaxaJuros(e.target.value)}
              placeholder="0.85"
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label">Período (meses)</label>
            <input
              type="number"
              className="form-control"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              placeholder="24"
            />
          </div>

          <div className="col-12 d-flex gap-2">
            <button className="btn btn-primary flex-grow-1" onClick={aoCalcular}>
              Calcular
            </button>

            <button className="btn btn-outline-secondary" onClick={aoLimpar}>
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapturaDados