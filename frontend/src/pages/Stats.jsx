import React from 'react';

const Stats = () => {
  // Dados mockados dos feedbacks
  const feedbacks = [
    { id: 1, text: "Adorei o atendimento!", kind: "ELOGIO" },
    { id: 2, text: "Demorou muito...", kind: "RECLAMACAO" },
    { id: 3, text: "O produto é muito bom!", kind: "ELOGIO" },
    { id: 4, text: "Poderia ter mais opções", kind: "SUGESTAO" },
    { id: 5, text: "Precisa melhorar o suporte", kind: "RECLAMACAO" },
    { id: 6, text: "Excelente qualidade!", kind: "ELOGIO" },
    { id: 7, text: "Seria legal ter mais cores", kind: "SUGESTAO" }
  ];

  // Calcular estatísticas
  const stats = feedbacks.reduce((acc, feedback) => {
    acc[feedback.kind] = (acc[feedback.kind] || 0) + 1;
    return acc;
  }, {});

  const elogios = stats.ELOGIO || 0;
  const reclamacoes = stats.RECLAMACAO || 0;
  const sugestoes = stats.SUGESTAO || 0;

  return (
    <div className="stats-container">
      <h2>Estatísticas</h2>
      
      <div className="stats-grid">
        <div className="stat-box elogio">
          <h3>
            <span role="img" aria-label="elogio">👍</span>
            Elogios
          </h3>
          <div className="stat-number">{elogios}</div>
        </div>
        
        <div className="stat-box reclamacao">
          <h3>
            <span role="img" aria-label="reclamacao">⚠️</span>
            Reclamações
          </h3>
          <div className="stat-number">{reclamacoes}</div>
        </div>
        
        <div className="stat-box sugestao">
          <h3>
            <span role="img" aria-label="sugestao">💡</span>
            Sugestões
          </h3>
          <div className="stat-number">{sugestoes}</div>
        </div>
      </div>

      <div className="total-feedbacks">
        <h3>Total de Feedbacks: {feedbacks.length}</h3>
      </div>
    </div>
  );
};

export default Stats;
