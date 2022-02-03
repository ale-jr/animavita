# AnimaVita

## Comandos disponíveis
- `npm run start`: Inicia a aplicação em modo de desenvolvimento com um servidor HTTP e hot reload
- `npm run build`: Gera os arquivos estáticos destinados a ambientes de produção, o build fica na pasta `/build`
- `npm run test`:  Executa testes unitários

## Divisão
Componentes, hooks e funções são divididos de acordo com suas responsabilidades sendo que idealmente cada item deve ter apenas uma responsabilidade, a separação é feita com a seguinte estrutura:
- Componentes de UI (`src/components`): São responsáveis apenas pela camada de interação e exibição para o usuário, é utilizado [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) para a separação.
- Containers (`src/containers`): Integram hooks aos componentes de UI.
- Hooks (`src/hooks`): Gerenciam estados mais complexos, ciclos de vida, integram services
- Services (`src/services`): Responsáveis por chamar APIs ou lidar com tarefas mais complexas
- Contextos (`src/contexts`): Onde [contexts e providers](https://reactjs.org/docs/context.html) são criados, estes auxiliam na passagem dos dados evitando repassar props, embora não sejam gerenciadores de dados, em conjunto com hooks podem ser usados para gerenciar um estado global ou um estado utilizado em vários lugares dentro de uma árvore.
- Tema e design tokens (`src/themes`): Aqui ficam todas as cores, espaçamentos, fontes e outros tokens que serão consumidos pelos componentes de ui, o tema é criado e usado utilizando [styled-components](https://styled-components.com/)
- Estilos globais(`src/globalStyles`): Estilos globais usando [styled-components](https://styled-components.com/)

## O que poderia ser melhor
Como eu não tive muito tempo livre eu priorizei fazer algo que funcionasse bem, mas existem algumas coisas que poderiam melhorar 😅 como:
- Implementar mais testes, especialmente _unhappy paths_
- Melhorar e separar melhor os mocks dos testes
- Criar um _service_ para chamadas HTTP (a função que chama a KitsuAPI está com muita responsabilidade)
- Definir mais algumas regras de lint ou implementar um padrão como stardard ou airbnb (deixei o conjunto de regras do create react app)
- Criar um favicon e definir o `manifest.json`
- Pensar em alguma forma de resolver o problema de encoding (depende um pouco do back, mas é algo possívle de resolver 😅)
- Hospedar o front em algum lugar (talvez um firebase?)

![That's all folks](https://media.giphy.com/media/upg0i1m4DLe5q/giphy.gif)


Qualquer dúvida, basta enviar um email para alejr.dev@gmail.com