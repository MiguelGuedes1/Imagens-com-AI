import express from "express"
import * as dotenv from "dotenv"    //  Modulo/biblioteca utilizado para carregar variáveis de ambiente a partir de um arquivo .env em sua aplicação Node.js
import cors from "cors"   //  Modulo de segurança do navegador que controla e permite solicitações entre origens diferentes em aplicações web.


//CONFIGURAÇÕES BASICAS DO SERVIDOR
dotenv.config()    // Funçao que permite usar as variaveis de ambiente criadas no ficheiro .env
const app = express()
app.use(cors())
app.use(express.json({ limit:'50mb' })) // analisar o corpo das solicitações HTTP como JSON. O parâmetro limit define o tamanho máximo do corpo da solicitação em 50mb


// CONFIGURAÇOES DE ROTAS

app.get('/', async (req,res) =>  {
    res.send("Hello from image_ai")
})

const iniciar_servidor = async () => {
    app.listen(8080, () => {
        console.log("Servidor iniciado correctamente na porta http://localhost:8080")
    })
}

iniciar_servidor()