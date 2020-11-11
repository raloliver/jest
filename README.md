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

![https://i.imgur.com/6AUzRWz.png](jest --watchAll)