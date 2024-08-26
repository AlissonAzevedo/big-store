## Documentação do Projeto

### Descrição do Projeto

Este é um projeto chamado **Big Store**, desenvolvido utilizando **Next.js** e **React**. O objetivo do projeto é criar uma aplicação web moderna e escalável para uma loja online.

### Como Rodar o Projeto

#### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior) ou yarn ou pnpm ou bun

#### Passos para Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd big-store
   ```

2. **Crie um arquivo `.env` baseado no `.env.example`:**

   ```bash
   cp .env.example .env
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

5. **Abra o navegador e acesse:**

   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila o projeto para produção.
- `start`: Inicia o servidor em modo de produção.
- `lint`: Executa o linter para verificar problemas no código.
- `test`: Executa os testes utilizando Jest.

### Motivação das Escolhas Técnicas

- **Next.js**: Escolhido por ser um framework React que oferece renderização do lado do servidor (SSR) e geração de sites estáticos (SSG), o que melhora a performance e SEO da aplicação.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário, conhecida por sua eficiência e modularidade.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, ajudando a evitar erros e melhorar a manutenção do código.
- **TailwindCSS**: Framework de CSS utilitário que permite um desenvolvimento rápido e consistente de estilos.
- **Zustand**: Biblioteca de gerenciamento de estado simples e escalável.
- **Jest** e **Testing Library**: Ferramentas para testes unitários e de integração, garantindo a qualidade do código.
- **ESLint** e **Prettier**: Ferramentas para manter a consistência e qualidade do código.
- **shadcn**: Utilizado para componentes de UI, proporcionando uma experiência de desenvolvimento mais rápida e consistente.
- **Material UI**: Utilizado para ícones, fornecendo uma ampla gama de ícones prontos para uso.

### Dependências Principais

- `@shadcn/ui` e `@mui/icons-material`: Componentes de UI prontos para uso.
- `@tanstack/react-query`: Para gerenciamento de estado assíncrono e cache de dados.
- `axios`: Cliente HTTP para fazer requisições à API.
- `formik`: Para gerenciamento de formulários.
- `zustand`: Para gerenciamento de estado global.
- `tailwindcss` e `tailwindcss-animate`: Para estilização rápida e animações.

### Dependências de Desenvolvimento

- `@testing-library/react` e `jest`: Para testes.
- `eslint` e `prettier`: Para linting e formatação de código.
- `typescript`: Para tipagem estática.

### Estrutura de Pastas

- `src/app`: Contém as páginas da aplicação.
- `src/components`: Contém os componentes reutilizáveis.
- `src/functions`: Contém funções utilitárias.
- `src/hooks`: Contém hooks personalizados.
- `src/stores`: Contém os stores do Zustand.
- `src/services`: Contém os serviços para fazer requisições à API.
- `src/utils`: Contém funções utilitárias.
- `src/@types`: Contém definições de tipos.

### Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

### Licença

Este projeto está licenciado sob a licença MIT.
