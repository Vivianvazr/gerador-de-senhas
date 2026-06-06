function gerarSenhaTela() {

  const tamanho =
    Number(document.getElementById("tamanho").value);

  const resultado =
    document.getElementById("resultado");

  if (tamanho < 4) {
    resultado.textContent =
      "Digite um tamanho maior ou igual a 4";
    return;
  }

  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

  let senha = "";

  for (let i = 0; i < tamanho; i++) {

    const indice =
      Math.floor(
        Math.random() * caracteres.length
      );

    senha += caracteres[indice];
  }

  resultado.textContent = senha;
}