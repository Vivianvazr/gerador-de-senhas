const { gerarSenha } = require("../senha");

describe("Gerador de Senhas", () => {

  test("Gerar senha válida", () => {
    const senha = gerarSenha(8);
    expect(senha.length).toBe(8);
  });

  test("Não permitir tamanho menor que 4", () => {
    expect(gerarSenha(3)).toBe("Tamanho inválido");
  });

  test("Senha deve ser string", () => {
    const senha = gerarSenha(10);
    expect(typeof senha).toBe("string");
  });

});