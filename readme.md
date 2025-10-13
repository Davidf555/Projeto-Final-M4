# 📦 Cadastro e gerenciamento de ONGs de Energia Renovável e Casos de Energia

API sobre ONGs que atuam em **energia renovável** e sobre **casos de impactos de energia renovável**, desenvolvida em **JavaScript**, **Node.js** e **Express**, seguindo o padrão **MVC**.

Permite cadastrar, listar, atualizar e deletar informações de ONGs e casos de energia renovável.

---

## 🏗️ Arquitetura MVC

Este projeto segue a arquitetura **Model-View-Controller (MVC)**:

* **Model**: responsável pela comunicação com o banco de dados e estruturas de dados.
* **View**: resposta em **JSON** para o cliente.
* **Controller**: contém a lógica da aplicação e recebe as requisições.
* **Routes**: direcionam as requisições para os controllers corretos.

---

## 📂 Estrutura de Pastas

```bash
📂 PROJETO FINAL M4
 ┣ 📂 controllers   # Lógica das requisições
 ┣ 📂 models        # Estruturas e banco de dados
 ┣ 📂 routes        # Definição das rotas
 ┗ 📜 index.js      # Arquivo principal
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## 🚀 Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)

---

## ⚙️ Instalação e Uso

### 1. Clonar o repositório

```bash
git clone https://github.com/Davidf555/Projeto-Final-M4.git
cd Projeto-Final-M4
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Iniciar o servidor

```bash
node index.js
```

O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

---

## 📡 Rotas da API

### ONGs de Energia Renovável

| Método  | Rota                   | Descrição                                 |
| ------- | ---------------------- | ----------------------------------------- |
| GET     | `/ongs/listar-ongs`         | Lista todas as ONGs cadastradas           |
| POST    | `/ongs/criar-ong`          | Cadastra uma nova ONG                     |
| PUT     | `/ongs/editar-ong/:id`     | Atualiza uma ONG existente por ID         |
| DELETE  | `/ongs/deletar-ong/:id`    | Remove uma ONG por ID                     |

### Casos de Energia Renovável

| Método  | Rota                                 | Descrição                                 |
| ------- | ------------------------------------ | ----------------------------------------- |
| GET     | `/casos-energia/listar-energia`      | Lista todos os casos de energia renovável |
| POST    | `/casos-energia/criar-energia`       | Cria um novo caso de energia renovável    |
| PUT     | `/casos-energia/editar-energia/:id`  | Atualiza um caso existente por ID         |
| DELETE  | `/casos-energia/deletar-energia/:id` | Remove um caso por ID                     |

---

## 😄 Authors

* Davi Flavio Oliveira
* Geovana Morais Pinheiro Souza
* Iasmhim Vilaça Ribeiro
* Letícia Geralda Conceição Ferreira
* Jaqueline Abreu Silva Lima
* Ana Clara de Jesus Silva
