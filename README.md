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


![That's all folks](https://media.giphy.com/media/upg0i1m4DLe5q/giphy.gif)


Qualquer dúvida, basta enviar um email para alejr.dev@gmail.com