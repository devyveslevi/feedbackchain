import React, { useState } from 'react'

function App() {
  const [messages, setMessages] = useState([
    { sender: "Alice", message: "Adorei o atendimento!", kind: "ELOGIO" },
    { sender: "Bob", message: "Demorou muito...", kind: "RECLAMACAO" }
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendFeedback = () => {
    if (newMessage.trim()) {
      const newFeedback = {
        sender: "Você",
        message: newMessage,
        kind: "SUGESTAO"
      }
      setMessages([...messages, newFeedback])
      setNewMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendFeedback()
    }
  }

  // Calcular estatísticas
  const statistics = {
    ELOGIO: messages.filter(msg => msg.kind === "ELOGIO").length,
    RECLAMACAO: messages.filter(msg => msg.kind === "RECLAMACAO").length,
    SUGESTAO: messages.filter(msg => msg.kind === "SUGESTAO").length
  }

  return (
    <div className="App">
      <h1>FeedBackChain</h1>
      <p>Welcome to FeedBackChain application</p>
      
      <div className="feedback-container">
        <h2>Feedbacks</h2>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.sender}:</strong> {msg.message}
              <span className="kind">({msg.kind})</span>
            </div>
          ))}
        </div>
        
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite seu feedback..."
            className="feedback-input"
          />
          <button onClick={handleSendFeedback} className="send-button">
            Enviar Feedback
          </button>
        </div>
        
        <div className="statistics">
          <h3>Estatísticas</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Elogios:</span>
              <span className="stat-value">{statistics.ELOGIO}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Reclamações:</span>
              <span className="stat-value">{statistics.RECLAMACAO}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Sugestões:</span>
              <span className="stat-value">{statistics.SUGESTAO}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
