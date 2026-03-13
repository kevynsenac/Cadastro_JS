# 📘 Atividade: Cadastro com Persistência em LocalStorage (Dark Theme)

Este projeto consiste em um sistema de cadastro funcional, desenvolvido para praticar a integração entre HTML semântico, estilização avançada com CSS e manipulação de dados persistentes no navegador via JavaScript.

## 🎯 Objetivo
O foco principal é demonstrar o fluxo completo de uma aplicação web: capturar dados de um formulário, armazená-los de forma que não se percam ao atualizar a página e renderizá-los dinamicamente em uma interface distinta.

## 🛠️ Conceitos Praticados

* **Estrutura Semântica**: Organização do conteúdo utilizando tags apropriadas como `<main>`, `<form>`, e tabelas de dados.
* **Estilização "Midnight" (Dark/Blue)**:
    * **Paleta de Cores**: Uso de tons profundos como `#0a192f` para o fundo e `#64ffda` (Aqua) para realces e botões.
    * **Diferenciação Visual**: O botão de cadastro possui preenchimento sólido, enquanto o botão "Ver Usuários" utiliza o estilo *outline* para hierarquia visual.
    * **Responsividade**: Uso de `max-width` e `padding` flexível para garantir que o formulário se adapte a diferentes telas.
* **Lógica de Persistência (JavaScript)**:
    * **LocalStorage**: Armazenamento de objetos de usuário convertidos em strings via `JSON.stringify()`.
    * **Manipulação de DOM**: Recuperação dos dados com `JSON.parse()` e criação dinâmica de linhas na tabela de cadastrados.
    * **Gestão de Eventos**: Uso de `event.preventDefault()` para tratar o envio do formulário sem recarregar a página prematuramente.

## 📂 Organização do Projeto

1.  **`formulario.html`**: A porta de entrada do sistema, onde o usuário insere Nome, E-mail e Senha.
2.  **`cadastrados.html`**: Uma aba dedicada para visualizar a lista de todos os usuários salvos no banco de dados local.
3.  **`style.css`**: Arquivo central de estilo que aplica o tema Dark/Blue em ambas as páginas.
4.  **`script.js`**: O "cérebro" da aplicação, responsável por salvar os dados e gerenciar a lógica de cadastro.

## 🚀 Como Funciona
1. O usuário preenche os campos no `formulario.html`.
2. Ao clicar em **Finalizar Cadastro**, os dados são validados e salvos no `localStorage` do navegador sob a chave `"usuarios"`.
3. Ao navegar para **Ver Usuários Cadastrados**, o script lê essa chave e reconstrói a tabela com as informações salvas.