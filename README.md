# Soft Table

### Objetivo do projeto

Projeto de apresentação para a empresa SoftWrap

### Tecnologias utilizadas

Este projeto implementa as seguintes tecnologias:

- React
- Tailwind
- Craco
- React-router-dom
- Fomik
- Joi
- Jest

## Relatório

Estágios de desenvolvimento do projeto (entre parêntesis a referencia do commit):

- (4116733) Foi desenvolvida uma base para o projeto a partir de componentes do site Tailwind, com ajustes e refatoração onde necessário para se ajustar ao especificado:

Barra de navegação: https://tailwindui.com/components/application-ui/navigation/navbars

Tabela: https://tailwindui.com/components/application-ui/lists/tables

Formulário: https://tailwindui.com/components/application-ui/forms/form-layouts/

- ( 06980f9) Foi adicionado o routing para a paginação entre Visualização e Criar Novo Cadastro

- (f9b0ee5) Foi feita a base de atualização dos dados com redirecionamento para a página de listagem via Redirect.

- (ef7c663) Implementação inicial do processo de validação utilizando Joi.

- (c1746fe) Ajustes para modularizar o sistema, separando módulos, especialmente o de validação.

- (eb4b3f8) Após a base do cadastro (view) implementação da lógica utilizando formik

- (99309ae) Implementação inicial da página de edição. Ver observações para comentários.

- (008e902) Implementação dos métodos que implementam as funcionalidades de CRUD no frontend.

- (da8e6d9) Integração com o DB no Firebase

- (4a5feac) Implementação dos métodos de CRUD, no frontend, agora utilizando o firestore.

- (d63f2e9) Criação de alertas com a formação pedida

A partir de: tailwindcomponents.com/components/alerts-collection

- (122b041) Atualização da navegação com indicação da página atual

- Commits relativos a ajustes para deploy

- (0b29294) Início da implementação da paginação, em desenvolvimento

- (6aa9d1b) Testes do módulo de validação

- (3aac0e9 e 364091c) Implementa a paginação

- (bb32acb) Percebi que o diretório de testes estava fora da página app (prefiro sempre deixar todos os arquivos da aplicação em uma única pasta).

## Observações

Em função da forma como o projeto foi estabelecido, há algumas questões a serem consideradas:

- Como não há navegação para a página de editar na barra, o mesmo é alcançado por meio da listagem. A atualização da página, porém, irá gerar erro, já que os dados são passados nas props e estas são zeradas no caso de um re-rendering/atualização. O erro será "Cannot render property nome of undefined", já que os dados, agora estão como não-definidos.

- Utilizei o cpf como chave identificadora, o que me poupou a necessidade de usar outras chaves únicas (essa é uma chave naturalmente única). Em função disso, a página de alterar não pode alterar o cpf. Para alterar um cpf, o usuário terá que entrar um novo cadastro e apagar o anterior. Fiz com que o campo cpf estivesse com uma cor mais transparente de forma a indicar, para o usuário, que aquele campo não pode ser alterado.

- Como não foi estabelecido nenhum mecanismo de gerenciamento de estado (Redux, por exemplo), passei as props de parent component para child component. Apesar disso constituir um anti-padrão (prop-drilling), já que se trata de uma aplicação pequena e de pouca profundidade na passagem de dados (apenas um nível ou dois) e frente às especificações, não vi problema nessa passagem de dados. Normalmente eu utilizaria algo como Redux pra isso ou react-context.

- Testes: fiz apenas alguns testes básicos de validação. Teste de integração seria complicado de realizar, uma vez que a conexão com firebase é feita em app.js e não em um component em separado, como seria feito, por exemplo, com uma API.

- Alguns alertas podem ter permanecido na aplicação post-deploy. Em especial o alerta de que "Each child in a list should have a unique "key" prop", já que este está sendo gerado pela biblioteca Disclosure que é parte do modelo que utilizei.

## Problemas encontrados e pendências

- Formatação do Menu-hamburger em visualização para dispositivos móveis.
