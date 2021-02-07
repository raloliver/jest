# JEST

Criado pelo Facebook.

> ASSERTIONS: determinar se o resultado de um método, é exatamente o que estou esperando.

`npm test`

- testMach: regex que busca recursivamente arquivos de test (inclusive jsx) dentro da pasta 'tests' ou fora dela.

> Para evitar falso positivo, utilize o método `.not` do `expect`. É possível ter mais de um `expect` dentro de um `it`

- `toBe` x `toEqual`

### Jest Snippets (VSCode)

- https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets

### Watch

- Olha apenas o que foi alterado, e não todos os testes: `jest --watchAll`

![jest --watchAll](https://i.imgur.com/6AUzRWz.png)


### Coverage

- Branch: quando temos condicionais (if/else)
- Muito útil para verificar se algo falta ser testado
- O mínimo para cobertura de teste é de 80%

> Melhor ter testes de qualidade do que cobertura de testes

### NodeJS 12 para NodeJS 13

> O commonjs, onde utilizamos o module.exports e importamos usando o require, é o padrão até o NodeJS12, a partir do NodeJS13, já foi adotada o ES6 modules, que é a implementação nativa do JS para imports and exports.

### Babel 

- Necessário para utilização da syntax ES2015+ ([Docs](https://jestjs.io/docs/en/getting-started#using-babel))
- Ambos os tipos de import de módulos podem co-existir

> Se você perceber que existem muitos `describe` talvez seja a hora de separar o arquivos em pedaços menores.

### toMatchInlineSnapshot() e toMatchSnapshot()

- Use o `prettier` (`npm i -D prettier`) para adicionar mocks automaticamente.
- Se for necessário alterar o `act` do teste, tenha atenção, e faça a atualização do `assert` automaticamente (apenas clique em "Replace them"):
![Update assert](https://i.imgur.com/t3JDrDn.png)
- `toMatchSnapshot()` utilize para colocar o snapshot num arquivo separado