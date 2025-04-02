# 🤖 WhatsApp Bot - Curso de Cuidadores via Cloud API

Este projeto é uma automação completa via WhatsApp, usando **Node.js** e a **Meta Cloud API**, com foco no envio e recebimento de mensagens para alunos de um curso de cuidadores.

---

## 🚀 Tecnologias

- Node.js  
- Express  
- REST Client (VSCode)  
- dotenv (.env)  
- Meta Cloud API  
- Ngrok  
- Git & GitHub

---

## 📁 Estrutura do Projeto
meu-webhook/
├── request/
│   ├── ativar.http
│   └── test.http
├── .env
├── .gitignore
├── README.md
├── index.js
├── package.json
├── package-lock.json

---

## 🛠 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/crisajs/WhatsApp-bot.git
cd WhatsApp-bot

2.	Instale as dependências:
npm install

3.	Crie um arquivo .env com:
VERIFY_TOKEN=sua_verificacao
PORT=3000

4. Inicie o servidor:
node index.js

5.	Use os arquivos .http com a extensão REST Client no VSCode para testar as requisições.

🔐 Segurança

Este projeto NÃO envia arquivos sensíveis para o GitHub graças ao .gitignore, que ignora:
	•	node_modules/
	•	.env
	•	arquivos temporários locais

