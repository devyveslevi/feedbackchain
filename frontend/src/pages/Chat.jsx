import React, { useState } from 'react';

const Chat = () => {
  const [feedbacks, setFeedbacks] = useState([
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
  ]);
  
  const [newFeedback, setNewFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.trim()) {
      const feedback = {
        id: Date.now(),
        text: newFeedback.trim(),
        kind: "SUGESTAO",
        isUser: true,
        sender: "Você"
      };
      setFeedbacks([...feedbacks, feedback]);
      setNewFeedback('');
    }
  };

  const getKindColor = (kind) => {
    switch (kind) {
      case 'ELOGIO':
        return '#4CAF50';
      case 'RECLAMACAO':
        return '#F44336';
      case 'SUGESTAO':
        return '#2196F3';
      default:
        return '#757575';
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat / Feedback</h2>
      
      <div className="chat-box">
        {feedbacks.map((feedback) => (
          <div 
            key={feedback.id} 
            className={`feedback-item ${feedback.isUser ? 'user-message' : 'other-message'}`}
          >
            <div className="feedback-content">
              <div className="feedback-sender">{feedback.sender}</div>
              <span className="feedback-text">{feedback.text}</span>
            </div>
            <span 
              className="feedback-kind"
              style={{ backgroundColor: getKindColor(feedback.kind) }}
            >
              {feedback.kind}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          placeholder="Digite seu feedback..."
          className="feedback-input"
        />
        <button type="submit" className="send-button">
          Enviar Feedback
        </button>
      </form>
    </div>
  );
};

export default Chat;
