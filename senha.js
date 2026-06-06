function gerarSenha(tamanho) {
  if (!tamanho || tamanho < 4) {
    return "Tamanho inválido";
  }

  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }

  return senha;
}

module.exports = {
  gerarSenha
};