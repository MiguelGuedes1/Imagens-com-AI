import { PromptsSurpresa } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * PromptsSurpresa.length);
    const randomPrompt = PromptsSurpresa[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}
