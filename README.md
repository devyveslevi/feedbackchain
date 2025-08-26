# FeedBackChain

## Problema
Pequenos comerciantes frequentemente recebem feedbacks de clientes (elogios, reclamações e sugestões), mas esses dados se perdem em conversas de WhatsApp ou em papel, dificultando a melhoria do atendimento.

## Solução
Um sistema simples construído no Internet Computer Protocol (ICP), dividido em 4 canisters:
- **Auth Canister**: gerencia usuários registrados.
- **Feedback Canister**: armazena os feedbacks enviados pelos clientes.
- **Stats Canister**: gera estatísticas de tipos de feedback (elogios, reclamações, sugestões).
- **Admin Canister**: permite ações administrativas, como limpar feedbacks ou diferenciar plano free/premium.

## Frontend Mock
Um frontend em React (Vite) que simula:
- Envio de feedbacks.
- Listagem de feedbacks.
- Painel de estatísticas.

## Modelo de Negócio
- **Free**: histórico limitado a 50 feedbacks.
- **Premium**: histórico completo + relatórios exportáveis.

## Como rodar
### Backend
```bash
dfx start --background
dfx deploy
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Depois, abra http://localhost:5173 no navegador.