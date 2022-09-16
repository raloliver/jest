### Por que testar?

**Aplicações Javascript: aprenda a testa-las**

Se não existirem teste (manuais ou automatizados) existem a possibilidade de se perder dinheiro.

> "É impensável desenvolver profissionalmente sem incluir testes"

- Confiança ao refatorar
- Confiança ao incluir novas funcionalidades
- Confiança ao atualizar dependências (dependabot e github actions)
- Facilita a compreensão da implementação
- Funciona como documentação

### O que testar?

**Tudo o que fizer sentido testar**

- Devo deixar um comentário? Escreva um teste para explicar.

### Pirâmide de Testes

**Os tipos mais comuns de testes**

- O código precisa fazer uma uníca com e bem feito (linux philosophy)
- Unit Tests (testes que cobrem todo o comportamento de uma classe/método)
- Integration Tests (garantem que diversas unidades trabalham bem quando trabalham em conjunto dentro de uma composição, geralmente usado para verificar a consistência da resposta de uma rota)
- E2E (end to end tests)

!["Pirâmide de Testes"](https://p0x1ja.dm.files.1drv.com/y4mQV-Cb8n3C5oSG0z44i5PuAUTdPx1zQWrgJ6EZVOPEFYKIoOoUxQxMrJFLU627YJYaaDKq2L-RPW7tUS3Lt4ii72FKRPBK2cvAVjep1ETgx70KrLer-5mdL7SikWuGStAHjry8jWAdInU2_2sGoExSwSckm8FbpLgSq_lRstHUqtrUIRgXCm5wa5DDysnSNrzwTow6F59dOLXP-JzzNVbZA/Javascript%20-%20Pir%C3%A2mide%20de%20Tests.png?psid=1 'Pirâmide de Testes')

### Ferramentas

- Jest
  - Test runner
    - Localiza os arquivos e executa os testes
    - Permite fazer mock e observar métodos em bibliotecas
    - Permite fazer assertions, tais como expect().toBe()
- Cypress
  - Test runner para E2E
  - Executa a aplicação no Browser como se fosse o usuário
  - Não precisa ser usado com Jest
- Bibliotecas (Testing Library, Enzyme, Vue Test Utils) para realizar tarefas na store
  - Testing library: provê utilitários para montar e integarir componentes (sem detalhes de implementação)
  - Oferece ferramentas para interagir com componente como se fosse o usuário
  - Trabalha em conjunto com o Jest
  - _Enzyme_: **permite manejar state e testar detalhes de implementação**

> Quanto menos alterarmos os testes, melhor.

### CI/CD (Continuous Integration & Continuous Delivery)

**O papel dos testes no deploy moderno**

Os testes são integrados ao processo de CI/CD e são fundamentais para que estes existam.

- Github Actions
- CircleCI

### TDD (Test Driven Development)

1. Write a failing test
2. Make the test pass
3. Refactor

**Vantagens**

- Melhora a implementação
- Facilita implementações mais simples
- Facilita a escrita dos testes
- Detalhes de implementação mais recentes (isso ajuda a implementar features mais próximas ao A/C (acceptance criteria))
- Menor tempo dedicado a bugfix

**Desafios**

- Curva de aprendizado
- Maior tempo de desenvolvimento (normalmente a quantidade do código escrita nos testes é maior do que a escrita na implementação)
- Difícil de vender a ideia ao time de produto
