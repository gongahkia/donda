[![](https://img.shields.io/badge/donda_1.0.0-passing-green)](https://github.com/gongahkia/donda/releases/tag/1.0.0)

# `Donda`

`Donda` is an AI Agent-based Web Assistant that automates the mundanity out of your life.

<div align="center">
    <img src="./asset/reference/root.webp" width="50%">
</div>

## Stack

* *Frontend*: [React](https://react.dev/), [Vite](https://vite.dev/), [Zustand](https://zustand-demo.pmnd.rs/), [Framer Motion](https://www.framer.com/motion/), [Headless UI](https://headlessui.com/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/)
* *Backend*: [Node.js](https://nodejs.org/en), [Express.js](https://expressjs.com/), [Socket.io](https://socket.io/), [Prisma](https://www.prisma.io/)
* *DB*: [PostgreSQL](https://www.postgresql.org/)
* *Auth*: [JWT](https://jwt.io/)
* *Browser Extension*: [React](https://react.dev/), [Webpack](https://webpack.js.org/), [TypeScript](https://www.typescriptlang.org/)
* *Package*: [Docker](https://www.docker.com/)

## Screenshot

![](./asset/reference/app.png)

## Usage

The below instructions are for locally hosting `Donda`.

1. First execute the below.

```console
$ git clone https://github.com/gongahkia/donda && cd donda
```

2. Then create a `.env` file at `backend/.env` with the following content.

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/donda"
JWT_SECRET="your_jwt_secret_key"
PORT=4000
```

3. Finally run the below.

```console
$ npm install && npm run prisma:migrate --workspace=backend && npm run prisma:seed --workspace=backend 
```

4. You can then use any of the following commands to run `Donda`.

```
$ npm run dev --workspace=backend
$ npm run dev --workspace=frontend
$ npm run watch --workspace=extension
$ npm run build --workspace=extension
$ docker-compose up --build
```

## Architecture

`Donda` is structured as a monorepo comprising a backend API, a frontend web application, a browser extension, and shared utility packages.

### System Context Diagram

```mermaid
C4Context
    title System Context Diagram for Donda

    Person(user, "User", "Interacts with Donda through the web app or browser extension")

    System(web_app, "Web Application", "React-based user interface for managing workflows and settings")
    System(browser_extension, "Browser Extension", "Injects content scripts, analyzes pages, and provides guided interactions")
    System(backend_api, "Backend API", "Node.js/Express server handling business logic, data, and AI integrations")
    System(postgresql, "PostgreSQL Database", "Stores user data, workflows, queries, and website information")
    System_Ext(llm_service, "External LLM Service", "Provides AI capabilities for natural language understanding and generation")

    Rel(user, web_app, "Manages and views workflows via")
    Rel(user, browser_extension, "Receives guided assistance and automates tasks via")
    Rel(web_app, backend_api, "Communicates with", "HTTP/S, WebSockets")
    Rel(browser_extension, backend_api, "Communicates with", "HTTP/S, WebSockets")
    Rel(backend_api, postgresql, "Reads from and writes to", "SQL (Prisma)")
    Rel(backend_api, llm_service, "Sends requests to", "API")
```

### Container Diagram

```mermaid
C4Container
    title Container Diagram for Donda

    Person(user, "User")

    Container_Boundary(donda_system, "Donda System") {
        Container(frontend_container, "Frontend Web App", "React, Vite", "Serves the main user interface")
        Container(extension_container, "Browser Extension", "React, Webpack", "Runs in the user's browser, interacts with web pages")
        Container(backend_container, "Backend API", "Node.js, Express, Socket.io", "Handles API requests, real-time communication, and core logic")
        ContainerDb(db_container, "PostgreSQL Database", "Relational Database", "Stores persistent application data")
    }

    System_Ext(llm_provider, "LLM Provider", "e.g., OpenAI, Hugging Face", "External service for AI capabilities")

    Rel(user, frontend_container, "Accesses via", "HTTPS")
    Rel(user, extension_container, "Installs and uses in browser")
    Rel(frontend_container, backend_container, "Makes API calls and uses WebSockets", "HTTP/S, WSS")
    Rel(extension_container, backend_container, "Makes API calls and uses WebSockets", "HTTP/S, WSS")
    Rel(backend_container, db_container, "Reads/writes data via Prisma", "SQL")
    Rel(backend_container, llm_provider, "Sends prompts and receives responses", "API")
```

## Support

`Donda` is designed to work across multiple platforms:

-   **Web Browsers**: Chrome (with extension), Firefox (with extension), Safari (planned), Edge (planned)
-   **Desktop**: Via web application in any modern browser.
-   **Development**: Node.js 18+, npm/pnpm, Docker.

For support, please [open an issue](https://github.com/gongahkia/donda/issues) on GitHub.

## Reference

The name `Donda` is in reference to the [10th album](https://en.wikipedia.org/wiki/Donda) of rapper [Kanye West](https://en.wikipedia.org/wiki/Kanye_West), who named it in honour of his late mother [Donda West](https://en.wikipedia.org/wiki/Donda_West).

<div align="center">
    <img src="./asset/logo/album.webp" width="50%">
</div>

## Legal

### Disclaimer

This software is provided "as is" without warranty of any kind, express or implied. The developers make no representations or warranties regarding the accuracy, reliability, or completeness of the software. Users assume all risks associated with the use of this application, including but not limited to data loss, security vulnerabilities, or unintended automation of web actions.
