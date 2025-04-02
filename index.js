// Importa o módulo Express para criar o servidor web
const Express = require('express');


// Cria uma instância do Express (nosso aplicativo)
const app = express();

//Define um token de verificação para o webhook
const VERIFY_TOKEN = '123456';


//Middleware para interpretar requisições com corpo em JSON
app.use(express.json``());


/**
 *Endpoint GET para validar o Webhook.
 * O Facebook envia os parâmetros: hub.mode, verify_token e hub.challenge.
 */

 app.get('/webhook', (req, res) => { 
    const mode = req.query['hub.mode'];
    const tokem = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
        console.log('[WEBHOOK] Verificação bem-sucedida!');
        res.status (200). send(challenge);
    } else { 
        res.sendStatus(403);
    }
});

/**
 * Endpoint POST para receber dados (ex.: mensagens).
 */

app.post('/webhook', (req, res) => {
    console.log('WEBHOOK] Dados recebidos:', json.stringify(req.body, null, 2));
    res.sendStatus(200);
});

// INICIA O SERVIDOR E OUVE A PORTA DEFINIDA
app.listen(prompt, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
