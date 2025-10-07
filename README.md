# AngularTCCProject

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

## 🧩 Estrutura do projeto

src/
┣ app/
┃ ┣ core/ # Componentes e serviços principais
┃ ┣ features/ # Módulos funcionais (dashboard, calendário, etc.)
┃ ┣ shared/ # Componentes e pipes compartilhados
┃ ┗ app-routing.module.ts
┣ assets/
┣ environments/
┗ index.html


---

## 💻 Como executar o projeto

1. **Clonar o repositório**

```bash
git clone https://github.com/SEU_USUARIO/AngularTCCProject.git
cd AngularTCCProject

npm install

ng serve

json-server --watch db.json --port 3000


ng test

Sobre o projeto

Este projeto foi desenvolvido como parte do TCC, com foco em aplicações web modernas com Angular, design responsivo e integração com APIs RESTful.
O objetivo principal é aplicar conceitos de desenvolvimento front-end, componentização e boas práticas em Angular.
