// ⚠️ Modifique apenas as variáveis!

var textHome1 = `Feito com amor, para `;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textHome1\}/g, textHome1);
  });
});