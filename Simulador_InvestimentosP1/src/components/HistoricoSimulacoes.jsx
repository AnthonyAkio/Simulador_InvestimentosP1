function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function HistoricoSimulacoes({ historico }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Histórico de simulações</h2>
          <span className="text-muted">{historico.length} simulações</span>
        </div>

        {historico.length === 0 ? (
          <p className="text-muted mb-0">Nenhuma simulação realizada ainda.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>Data</th>
                  <th className="text-end">Valor final</th>
                </tr>
              </thead>
              <tbody>
                {historico.map((item) => (
                  <tr key={item.id}>
                    <td>{item.dataHora}</td>
                    <td className="text-end">{formatarMoeda(item.valorFinal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default HistoricoSimulacoes