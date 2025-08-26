# 📦 Denuncias de maus tratos aos animais e casos de impactos de energia renovavel

  

API sobre casos de denuncias de maus tratos aos animais e casos de impactos de energia renovavel, desenvolvida em JavaScript, Node.js e express seguindo o padrão MVC.

  

---

  

## 🏗️ Arquitetura MVC

Este projeto segue a arquitetura **Model-View-Controller (MVC)**:

  

- **Model**: responsável pela comunicação com o banco de dados.  

- **View**: neste projeto, pode ser apenas a resposta em JSON para o cliente.  

- **Controller**: contém a lógica da aplicação e recebe as requisições.  

- **Routes**: direcionam as requisições para os controllers corretos.  

  

## 📂 Estrutura de pastas do projeto

  

```bash

📂 PROJETO FINAL M4

 ┃ ┣ 📂 controllers   # Lógica das requisições

 ┃ ┣ 📂 models        # Estruturas e banco de dados

 ┃ ┣ 📂 routes        # Definição das rotas

 ┃ ┗ 📜 index.js        # Arquivo principal

 ┣ 📜 package.json

 ┗ 📜 README.md

```

---

  

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)  

- [Express](https://expressjs.com/)  

  

---

  

## ⚙️ Instalação e uso

  

### 1. Clonar o repositório

  

```bash

git clone https://github.com/Davidf555/Projeto-Final-M4.git

cd Projeto-Final-M4

  

npm install express

  

node index.js

Servidor rodando em http://localhost:3000

```

## 📡 Rotas principais (exemplo)

  

| Método | Rota            | Descrição                     |

|--------|-----------------|-------------------------------|

| GET    | `/casos-denuncia-animais/listar-denuncia`     | Lista todos os  Denuncias      |

| POST   | `/casos-denuncia-animais/criar-denuncia`     | Cria um novo   Denuncias        |

| PUT    | `/casos-denuncia-animais/editar-denuncia/:id` | Atualiza denuncias por ID       |

| DELETE | `/casos-denuncia-animais/deletar-denuncia/:id` | Remove denuncias por ID         |





| Método | Rota            | Descrição                     |

|--------|-----------------|-------------------------------|

| GET    | `/casos-energia/listar-energia`     | Lista todos os  casos de energia renovavel     |

| POST   | `/casos-energia/criar-energia`     | Cria um novo  caso de energia renovavel       |

| PUT    | `/casos-energia/editar-energia/:id` | Atualiza o caso de energia renovavel por ID       |

| DELETE | `/casos-energia/deletar-energia/:id` | Remove caso de energia renovavel por ID         |
  

## :smiley_cat: Authors

- Davi Flavio Oliveira

- Geovana Morais Pinheiro Souza

- Iasmhim Vilaça Ribeiro

- Letícia Geralda Conceição Ferreira

- Jaqueline Abreu Silva Lima

- Ana Clara de Jesus Silva
