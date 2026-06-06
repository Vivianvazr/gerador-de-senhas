# Relatório de Elicitação de Requisitos

## Projeto: Gerador de Senhas

### Objetivo

Desenvolver uma aplicação web capaz de gerar senhas aleatórias de acordo com o tamanho informado pelo usuário, utilizando práticas de CI/CD.

## Ideia

A ideia do projeto surgiu porque eu e minha dupla, Vivian e Lívia, costumamos utilizar a mesma senha em vários lugares. Percebemos que isso pode ser um risco, pois se essa senha vazar, várias contas podem ser acessadas por outras pessoas. Por isso, criamos um Gerador de Senhas para ajudar na criação de senhas fortes e mais seguras.


## Requisitos Funcionais

### RF01 – Informar tamanho da senha

O usuário deve informar a quantidade de caracteres da senha.

### RF02 – Gerar senha

O sistema deve gerar uma senha aleatória ao clicar no botão "Gerar Senha".

### RF03 – Exibir senha

A senha gerada deve ser exibida na tela.

### RF04 – Validar tamanho mínimo

O sistema não deve gerar senhas menores que 4 caracteres.

### RF05 – Utilizar caracteres variados

A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais.

## Requisitos Não Funcionais

### RNF01 – Interface simples

O sistema deve possuir uma interface fácil de utilizar.

### RNF02 – Compatibilidade

O sistema deve funcionar em navegadores modernos.

### RNF03 – Organização

O código deve estar organizado em arquivos HTML, CSS, JavaScript e testes.

## Testes Automatizados

### Teste 1

Gerar senha com tamanho 8.

Resultado esperado:
Senha com 8 caracteres.

### Teste 2

Gerar senha com tamanho menor que 4.

Resultado esperado:
"Tamanho inválido".

### Teste 3

Verificar se a senha gerada é do tipo String.

Resultado esperado:
Retorno verdadeiro.

## Controle de Versão

Branches utilizadas:

* main
* develop
* feature/gerador-senhas

Fluxo:

feature/gerador-senhas → develop → main

## CI/CD

Ferramentas utilizadas:

* GitHub Actions
* Jest
* GitHub Pages

### Pipeline

Etapas executadas:

1. Checkout do código
2. Instalação das dependências
3. Execução dos testes
4. Execução do build

## Deploy

Publicação realizada através do GitHub Pages utilizando a branch main.

## Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* Node.js
* Jest
* GitHub Actions
* GitHub Pages
