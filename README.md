🌐 MyTasks – Gerenciador de Tarefas Web
---
Este repositório contém o MyTasks, uma aplicação web de gerenciamento de tarefas desenvolvida para permitir que usuários criem, visualizem, editem, pesquisem e excluam suas tarefas de maneira simples e organizada.
A aplicação utiliza serviços do Firebase para autenticação de usuários e armazenamento dos dados em tempo real, além de integração com GitHub Pages para hospedagem da aplicação.

📌 Objetivo do Projeto:
---
O objetivo do projeto é desenvolver uma aplicação web funcional de gerenciamento de tarefas, aplicando conceitos de desenvolvimento front-end, autenticação de usuários, persistência de dados em nuvem e integração com serviços modernos.
A aplicação permite que cada usuário tenha acesso às suas próprias tarefas, com os dados armazenados individualmente no Firebase Realtime Database.

🛠️ Tecnologias Utilizadas:
---
- HTML5 – Estrutura da aplicação web
- CSS3 – Estilização e layout da interface
- JavaScript (ES6+) – Lógica e funcionalidades da aplicação
- Firebase Authentication – Autenticação e gerenciamento de usuários
- Firebase Realtime Database – Armazenamento e sincronização dos dados em tempo real
- Firebase Hosting – Hospedagem alternativa da aplicação
- GitHub Pages – Hospedagem da aplicação web
- GitHub Actions – Automação do processo de deploy
- Git/GitHub – Controle de versão e gerenciamento do código-fonte

📁 Estrutura do Projeto:
---
Projeto-Web-Cloud-Computing/
│
├── .github/
│   └── workflows/
│       └── deploy-pages.yml – Workflow de deploy automático no GitHub Pages
│
├── css/
│   └── styles.css – Estilos da aplicação
│
├── img/
│   ├── myTasks.png
│   ├── myTasksFavicon.png
│   └── ... – Imagens e recursos visuais
│
├── js/
│   ├── firebase.js – Configuração e inicialização do Firebase
│   ├── auth.js – Autenticação e gerenciamento de usuários
│   ├── todo.js – Criação, edição, pesquisa e exclusão de tarefas
│   └── utils.js – Funções auxiliares e manipulação da interface
│
├── .firebaserc – Configuração do projeto Firebase
├── .gitignore – Arquivos e diretórios ignorados pelo Git
├── firebase.json – Configuração do Firebase Hosting
├── index.html – Página principal da aplicação
└── README.md – Documentação do projeto

🚀 Funcionalidades:
---
- Cadastro de novos usuários
- Login com e-mail e senha
- Autenticação por provedores externos
- Recuperação de senha
- Verificação de e-mail
- Atualização do nome do usuário
- Exclusão da conta
- Criação de tarefas
- Listagem de tarefas
- Pesquisa de tarefas
- Edição de tarefas
- Exclusão de tarefas
- Armazenamento individual das tarefas por usuário
- Sincronização dos dados utilizando Firebase Realtime Database

▶️ Como Executar o Projeto:
---
1. Clone este repositório:
- git clone https://github.com/Esdra-Fontes/Projeto-Web-Cloud-Computing.git
2. Acesse a pasta do projeto:
- cd Projeto-Web-Cloud-Computing
3. Abra o projeto:
- Como a aplicação utiliza JavaScript e Firebase diretamente pelo navegador, não é necessário utilizar npm ou instalar dependências para executar a versão básica. Você pode utilizar uma extensão como Live Server no Visual Studio Code ou outro servidor local.
- Acesse, por exemplo: http://127.0.0.1:5500/
4. Acesse a aplicação publicada:
- A aplicação também está disponível através do GitHub Pages: https://esdra-fontes.github.io/Projeto-Web-Cloud-Computing/

☁️ Configuração do Firebase:
---
Para executar uma instância própria da aplicação, é necessário configurar um projeto no Firebase e habilitar os seguintes serviços:
- Firebase Authentication
- Firebase Realtime Database

Também é necessário configurar os domínios autorizados para autenticação, caso sejam utilizados provedores externos como Google, GitHub ou Facebook.

A configuração do Firebase é realizada no arquivo: js/firebase.js

📚 Aprendizados:
---
- Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript
- Implementação de autenticação de usuários
- Integração de aplicações web com Firebase
- Utilização do Firebase Realtime Database
- Persistência e sincronização de dados em tempo real
- Desenvolvimento de operações CRUD para gerenciamento de tarefas
- Organização de código JavaScript em diferentes arquivos
- Controle de versão utilizando Git e GitHub
- Configuração de deploy automatizado com GitHub Actions
- Publicação de aplicações utilizando GitHub Pages e Firebase Hosting

👤 Autor:
Esdra Fontes
