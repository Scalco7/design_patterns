# Padrões de Projeto em TypeScript

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> Repositório dedicado a exemplos práticos e claros de Padrões de Projeto (Design Patterns) implementados em TypeScript.

Criado por **Felipe Scalco**.

---

## 🎯 Sobre o Projeto

Este projeto foi criado com o objetivo de fornecer um guia prático e de fácil compreensão sobre os principais Padrões de Projeto de software, utilizando a linguagem TypeScript. Cada padrão é apresentado em uma estrutura de pastas organizada, com código de exemplo que demonstra sua implementação e uso no mundo real.

## 🤔 O que são Padrões de Projeto?

Padrões de Projeto (Design Patterns) são soluções reutilizáveis para problemas comuns que ocorrem no desenvolvimento de software. Eles não são um código final que pode ser copiado e colado, mas sim um modelo ou uma descrição de como resolver um problema que pode ser usado em muitas situações diferentes.

Eles são divididos em três categorias principais:

1.  **Padrões de Criação (Creational):** Focados nos mecanismos de criação de objetos, tentando criar objetos da maneira mais adequada para cada situação.
2.  **Padrões Estruturais (Structural):** Lidam com a composição de classes e objetos para formar estruturas maiores e mais complexas.
3.  **Padrões Comportamentais (Behavioral):** Concentram-se na comunicação e na atribuição de responsabilidades entre objetos.

## 📂 Estrutura do Repositório

O repositório está organizado nas três categorias principais de padrões de projeto:

```
.
├── 📂 behavioral_patterns/   # Padrões Comportamentais
├── 📂 creational_patterns/    # Padrões de Criação
└── 📂 structural_patterns/   # Padrões Estruturais
```

Dentro de cada pasta, você encontrará subpastas para cada padrão específico, contendo os arquivos TypeScript com a implementação.

## ✨ Padrões Implementados

Abaixo está a lista de padrões que você pode encontrar neste repositório.

### 🎨 Padrões de Criação (Creational)

*   *(Ex: Singleton, Factory Method, Abstract Factory, etc.)*

### 🏗️ Padrões Estruturais (Structural)

*   *(Ex: Adapter, Decorator, Facade, Proxy, etc.)*

### 🏃 Padrões Comportamentais (Behavioral)

*   *(Ex: Observer, Strategy, Command, State, etc.)*

*(**Nota:** Sinta-se à vontade para atualizar esta seção à medida que novos padrões forem adicionados!)*

## 🚀 Como Utilizar

Para executar os exemplos localmente, siga os passos abaixo.

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
*   [TypeScript](https://www.typescriptlang.org/)
*   [ts-node](https://github.com/TypeStrong/ts-node) para executar os arquivos `.ts` diretamente.

### Instalação

1.  Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd seu-repositorio
    ```
3.  Instale as dependências (se houver):
    ```sh
    npm install
    ```

### Executando um Exemplo

Para executar um padrão específico, utilize o `ts-node`. Por exemplo, para rodar o padrão `Singleton`:

```sh
npx ts-node ./creational_patterns/singleton.ts
```

## 🙌 Como Contribuir

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1.  Faça um **Fork** do projeto.
2.  Crie uma **Branch** para sua feature (`git checkout -b feature/NovoPadrao`).
3.  Faça o **Commit** de suas mudanças (`git commit -m 'Adiciona o padrão X'`).
4.  Faça o **Push** para a Branch (`git push origin feature/NovoPadrao`).
5.  Abra um **Pull Request**.

## 👤 Autor

**Felipe Scalco**

*   [GitHub](https://github.com/Scalco7)
*   [LinkedIn](https://www.linkedin.com/in/scalco/)


## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.