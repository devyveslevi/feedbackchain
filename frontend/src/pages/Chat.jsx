import React, { useState } from 'react';

const Chat = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, text: "Adorei o atendimento!", kind: "ELOGIO" },
    { id: 2, text: "Demorou muito...", kind: "RECLAMACAO" },
    { id: 3, text: "O produto é muito bom!", kind: "ELOGIO" },
    { id: 4, text: "Poderia ter mais opções", kind: "SUGESTAO" },
    { id: 5, text: "Precisa melhorar o suporte", kind: "RECLAMACAO" }
  ]);
  
  const [newFeedback, setNewFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.trim()) {
      const feedback = {
        id: Date.now(),
        text: newFeedback.trim(),
        kind: "SUGESTAO"
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
          <div key={feedback.id} className="feedback-item">
            <span className="feedback-text">{feedback.text}</span>
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
