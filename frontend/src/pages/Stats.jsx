import React from 'react';

const Stats = () => {
  // Dados mockados dos feedbacks (mesmos dados do Chat.jsx)
  const feedbacks = [
    { id: 1, text: "Excelente atendimento, voltarei sempre!", kind: "ELOGIO", isUser: false, sender: "Alice" },
    { id: 2, text: "A entrega atrasou em 2 dias.", kind: "RECLAMACAO", isUser: false, sender: "Bob" },
    { id: 3, text: "Poderiam adicionar opção de pagamento por PIX.", kind: "SUGESTAO", isUser: false, sender: "Carol" },
    { id: 4, text: "Funcionários muito atenciosos.", kind: "ELOGIO", isUser: false, sender: "Daniel" },
    { id: 5, text: "O produto chegou com embalagem danificada.", kind: "RECLAMACAO", isUser: false, sender: "Eva" },
    { id: 6, text: "Seria ótimo ter promoções semanais.", kind: "SUGESTAO", isUser: false, sender: "Fernando" },
    { id: 7, text: "Qualidade dos produtos superou minhas expectativas!", kind: "ELOGIO", isUser: false, sender: "Gabriela" },
    { id: 8, text: "O site está muito lento para carregar.", kind: "RECLAMACAO", isUser: false, sender: "Henrique" },
    { id: 9, text: "Adoraria ver mais opções de cores disponíveis.", kind: "SUGESTAO", isUser: false, sender: "Isabela" },
    { id: 10, text: "Preços muito competitivos no mercado!", kind: "ELOGIO", isUser: false, sender: "João" }
  ];

  // Calcular estatísticas dinamicamente
  const stats = feedbacks.reduce((acc, feedback) => {
    acc[feedback.kind] = (acc[feedback.kind] || 0) + 1;
    return acc;
  }, {});

  const elogios = stats.ELOGIO || 0;
  const reclamacoes = stats.RECLAMACAO || 0;
  const sugestoes = stats.SUGESTAO || 0;
  const total = feedbacks.length;

  // Calcular porcentagens
  const elogiosPercent = total > 0 ? Math.round((elogios / total) * 100) : 0;
  const reclamacoesPercent = total > 0 ? Math.round((reclamacoes / total) * 100) : 0;
  const sugestoesPercent = total > 0 ? Math.round((sugestoes / total) * 100) : 0;

  return (
    <div className="stats-container">
      <h2>Estatísticas</h2>
      
      <div className="stats-grid">
        <div 
          className="stat-box elogio"
          title="Total de Elogios dos Clientes"
        >
          <h3>
            <span role="img" aria-label="elogio">👍</span>
            Elogios
          </h3>
          <div className="stat-number">{elogios}</div>
          <div className="stat-percentage">{elogiosPercent}%</div>
        </div>
        
        <div 
          className="stat-box reclamacao"
          title="Total de Reclamações dos Clientes"
        >
          <h3>
            <span role="img" aria-label="reclamacao">⚠️</span>
            Reclamações
          </h3>
          <div className="stat-number">{reclamacoes}</div>
          <div className="stat-percentage">{reclamacoesPercent}%</div>
        </div>
        
        <div 
          className="stat-box sugestao"
          title="Total de Sugestões dos Clientes"
        >
          <h3>
            <span role="img" aria-label="sugestao">💡</span>
            Sugestões
          </h3>
          <div className="stat-number">{sugestoes}</div>
          <div className="stat-percentage">{sugestoesPercent}%</div>
        </div>
      </div>

      <div className="total-feedbacks">
        <h3>Total de Feedbacks: {total}</h3>
        <p className="stats-summary">
          Baseado em {total} feedbacks recebidos dos clientes
        </p>
      </div>
    </div>
  );
};

export default Stats;
