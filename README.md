# hotel-project-cliente
- Aplicação front-end do teste prático feita em Angular

![GIF_TELAS](https://github.com/Bruno-ferrariv/hotel-project-cliente/blob/main/gif/hotel_project_animacao.gif)

## Tecnologias utilizadas
- Angular (Type Script, HTML, CSS) | versão 10.0.11
- Bootstrap
- npm - gerenciador de dependência
- GIT

## Funcionalidades
 
 CRUD para o cadastro de hóspedes;
 - Create http://localhost:4200/inserir-hospede </br>
 - Read http://localhost:4200/hospedes  </br>
 - Update http://localhost:4200/alterar-hospede/:id  </br></br>
 No check in é possível buscar pessoas desse cadastro pelo nome, documento ou telefone; </br>
 - http://localhost:4200/check-in </br></br>
 Consulta hóspedes que já realizaram o check in e não estão mais no hotel; </br>
 - http://localhost:4200/ex-hospedes </br></br>
 Consulta hóspedes que ainda estão no hotel; </br>
 - http://localhost:4200/hospedes-ativos </br></br>
 As consultas apresentam o valor (valor total e o valor da última hospedagem) já gasto pelo hóspede no hotel. </br>

## Como rodar
Pré-requisitos: 
- NodeJS
- Npm
- Angular

```bash
# Baixe ou clone este repositório usando https://github.com/Bruno-ferrariv/hotel-project-server

# Estar no projeto pelo terminal e instalar as dependências
npm i

# Executar o projeto
ng serve
```


