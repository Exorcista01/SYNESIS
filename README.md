# SYNESIS

[![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular&logoColor=white)](https://angular.io/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![JSON Server](https://img.shields.io/badge/JSON--Server-FE692B?logo=json&logoColor=white)](https://github.com/typicode/json-server)

**AngularTCCProject** é uma aplicação desenvolvida em Angular como parte do Trabalho de Conclusão de Curso (TCC).  
O sistema tem como objetivo **gerenciar o desempenho acadêmico e atividades escolares de forma simples e intuitiva**, facilitando o acompanhamento de alunos e eventos.

---

## 🚀 Tecnologias utilizadas

- Angular 19  
- TypeScript  
- HTML / SCSS  
- JSON-Server (para simular API back-end)  
- Node.js (ambiente de execução)  

---

## ⚙️ Funcionalidades principais

- 🔐 **Autenticação de usuários** (login, registro e recuperação de senha)  
- 📅 **Calendário interativo** para controle de eventos e atividades  
- 🧾 **Dashboard** com estatísticas e informações principais  
- ⚙️ **Gerenciamento de usuários e permissões**  
- 🌙 **Modo escuro e claro** (opcional)  

---


## 🧩 Estrutura do Projeto

A estrutura de pastas principal do projeto está organizada da seguinte forma para manter o código modular, escalável e seguindo as boas práticas do Angular.

```
.
├── back-end/
│   ┗ db.json           # False API RESTful 
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── core/         # Módulos, serviços e modelos centrais (singleton)
│   │   │   ├── components/
│   │   │   ├── guards/
│   │   │   ├── models/
│   │   │   └── services/
│   │   ├── features/     # Funcionalidades de negócio da aplicação (páginas)
│   │   │   ├── apps/
│   │   │   ├── auth/
│   │   │   ├── courses/
│   │   │   ├── dashboard/
│   │   │   └── settings/
│   │   ├── shared/       # Componentes, pipes e diretivas reutilizáveis
│   │   │   ├── components/
│   │   │   ├── validator/
│   │   │   └── shared.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/         # Arquivos estáticos como imagens, fontes e ícones
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package-lock.json
├── package.json
└── ...
```


## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:
* [Node.js](https://nodejs.org/en/) (Recomendado: versão LTS)
* [Angular CLI](https://angular.io/cli)
* [Git](https://git-scm.com)

Você também precisará do `json-server`, que pode ser instalado globalmente com o seguinte comando:
```bash
npm install -g json-server
```

### Passo a Passo

1.  **Clone o Repositório**
    
    Primeiro, clone este repositório para a sua máquina local usando o terminal:
    ```bash
    git clone [https://seu-link-para-o-repositorio.git](https://seu-link-para-o-repositorio.git)
    ```

2.  **Acesse a Pasta do Projeto**
    
    ```bash
    cd nome-do-projeto
    ```

3.  **Instale as Dependências**
    
    Instale todas as dependências necessárias para o front-end e o back-end do projeto:
    ```bash
    npm install
    ```

4.  **Inicie o Back-end (API)**
    
    Em um **primeiro terminal**, navegue até a pasta `back-end` e inicie o `json-server`. A API ficará disponível em `http://localhost:3000`.
    ```bash
    # Dentro da pasta principal do projeto, navegue para o back-end
    cd back-end

    # Inicie o servidor
    json-server --watch db.json --port 3000
    ```

5.  **Inicie o Front-end (Aplicação Angular)**
    
    Abra um **segundo terminal** (mantenha o primeiro rodando o back-end) e execute o comando abaixo para iniciar a aplicação Angular.
    ```bash
    ng serve -o
    ```
    O comando `-o` abrirá automaticamente o seu navegador na página `http://localhost:4200/`.

---

## 💻 Sobre o Projeto

O SYNESIS é uma solução acadêmica completa, projetada especificamente para instituições de ensino médio profissionalizante que buscam potencializar o desempenho de seus alunos.

A plataforma centraliza materiais de estudo, facilita a comunicação entre professores e alunos, e oferece ferramentas robustas para o acompanhamento contínuo do progresso individual, garantindo que cada estudante atinja seu máximo potencial e esteja mais preparado para o mercado de trabalho.

### Principais Funcionalidades
* Visualização de cursos e trilhas de aprendizado.
* Acompanhamento de progresso do usuário.
* Autenticação de usuários.
* Interface responsiva e intuitiva.

---
## 👤 Autor

Feito por  Jorge Luis Dos Santos

Desenvolvedor Frond-end

Entre em contato ou veja outros projetos!

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Exorcista01)
