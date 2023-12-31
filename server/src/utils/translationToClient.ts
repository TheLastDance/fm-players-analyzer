import { Attributes } from "../types";
import { attributesFull } from "../data/attributes";

// this function will translate players attributes keys to selected language
// If this function will affect server perfomance in future it will go to a frontend side
// this function right now is not included anywhere. Just dont need it
function translationToClient(playerAttributes: Attributes, lang: keyof typeof attributesFull = 'en') {
  const entries = Object.entries(playerAttributes) as [keyof Attributes, string][];
  const swapLang = entries.map(([key, value]) => [[attributesFull[lang][key]], value]);
  return Object.fromEntries(swapLang);
}

export default translationToClient;