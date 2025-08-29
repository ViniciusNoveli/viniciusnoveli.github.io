// ⚠️ Modifique apenas as variáveis!

var textHome2 = `Para celebrar nosso primeiro ano juntos, essa demonstração de carinho tem muitos dos nossos momeentos em forma de fotos e muitas declarações em formato de texto. Não te entreguei nenhuma carta de papel porque essa é uma data especial e queria que você tivesse algo diferente. Espero que goste dessa forma que encontrei de te mostrar o quanto te amo!!`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textHome2\}/g, textHome2);
  });
});
