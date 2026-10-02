let text = prompt("Skriv inn en tekst:");

let words = text.trim().split(/\s+/);
let wordCount = text.trim() === "" ? 0 : words.length;

console.log("Antall ord:", wordCount);