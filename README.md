# Via Varejo Teste

Este projeto foi desenvolvido com o intuito de praticar programação resolvendo o teste de back-end Via Varejo com os requisitos encontrados neste link: [https://github.com/viavarejo/backend-test](https://github.com/viavarejo/backend-test).
Nos requisitos é pedido para desenvolver a aplicação em Java, porém foi desenvolvida em TypeScript.

## Pré-requisitos

É imprescindível que você tenha instalado em seu computador o NodeJs para que possa executar e testar este projeto.

- **Node** - [https://nodejs.org/en/download/](https://nodejs.org/pt-br/download/)

## Instalação

Exemplo:

Clone esse projeto em seu computador com o comando:

```
	git clone [https://github.com/mlucasdev/via-varejo]
```

Acesse a pasta do projeto seu terminal:

```
	cd [via-varejo]
```

Já na pasta da aplicação em seu terminal, digite o seguinte comando:

```
	npm install
```

## Execução

Após ter configurado o projeto e ter aguardado a instalação das dependencias de desenvolvimento, execute o comando:

```
 	npm run start
```

Caso queira que o projeto rode automaticamente após fazer alguma alteração no código execute o comando:

```
	npm run start:dev
```

A aplicação estará disponível para visualização em seu navegador, caso isso não aconteça automaticamente abre o navegador no seguinte endereço: _localhost:3333/api_

## Funcionalidades

- É possível executar um end point onde o você insere o código, nome e valor do produto, valor da entrada e número de parcelas e assim retornando o número de cada parcela, o valor dela e caso o número de parcelas seja superior a 6 aplicará uma taxa de juros baseado nos últimos 30 dias da selic.

## Stacks Utilizadas

- NestJs, TypeScript, JavaScript, Express, Swagger, NestJs Axios

## Autor

- **Lucas Marques** - Desenvolvedor - [Github](https://github.com/mlucasdev) | [Linkedin](https://www.linkedin.com/in/mlucasdev/)

## Licença

General Public License [GNU](https://www.gnu.org/licenses/gpl-3.0.html).
