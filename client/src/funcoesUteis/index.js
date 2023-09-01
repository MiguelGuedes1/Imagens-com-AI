import FileSaver from 'file-saver'
import { PromptsSurpresa } from '../constants';



// Funçao para gerar um prompt aleatorio na pagina Criar_um_Post
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * PromptsSurpresa.length);
    const randomPrompt = PromptsSurpresa[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}



// Funçao que permite ao utilizador gravar a imagem que gerou no seu computador
export async function downloadImage(_id,photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}
