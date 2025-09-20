[![](https://img.shields.io/badge/donda_1.0.0-passing-green)](https://github.com/gongahkia/donda/releases/tag/1.0.0)

# `Donda`

"Your AI-powered web assistant."

## Rationale

`Donda` is an intelligent web assistant designed to streamline complex online tasks and enhance user productivity. It leverages AI to understand user intent, guide through multi-step workflows, and automate interactions with web pages. From data extraction to guided form filling, Donda aims to simplify repetitive processes and make the web more accessible and efficient for everyone.

<div align="center">
    <img src="./asset/logo/donda-logo.webp" width="35%">
</div>

## Stack

*   *Frontend*: [React](https://react.dev/), [Vite](https://vite.dev/), [Zustand](https://zustand-demo.pmnd.rs/), [Framer Motion](https://www.framer.com/motion/), [Headless UI](https://headlessui.com/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/)
*   *Backend*: [Node.js](https://nodejs.org/en), [Express.js](https://expressjs.com/), [Socket.io](https://socket.io/), [Prisma](https://www.prisma.io/) (PostgreSQL ORM), [JWT](https://jwt.io/), [TypeScript](https://www.typescriptlang.org/)
*   *Browser Extension*: [React](https://react.dev/), [Webpack](https://webpack.js.org/), [TypeScript](https://www.typescriptlang.org/)
*   *Database*: [PostgreSQL](https://www.postgresql.org/)
*   *Package Management*: [PNPM](https://pnpm.io/) (implied by monorepo structure, though `npm` is used in scripts)
*   *Containerization*: [Docker](https://www.docker.com/)

## Screenshots

<div align="center">
    <img src="./asset/screenshots/dashboard.png" width="40%">
</div>

## Usage

The below instructions are for locally hosting `Donda`.

1.  **Clone the repository and install dependencies:**

    ```console
    $ git clone https://github.com/gongahkia/donda.git
    $ cd donda
    $ npm install # Or pnpm install if using pnpm workspaces
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the root directory and `backend/.env` with the following content:

    ```env
    # .env (root)
    # No specific root .env variables identified yet, but good practice to mention.
    # Add any shared environment variables here.
    ```

    ```env
    # backend/.env
    DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/donda"
    JWT_SECRET="your_jwt_secret_key"
    PORT=4000
    ```

3.  **Database setup:**

    ```console
    $ npm run prisma:migrate --workspace=backend # Apply migrations
    $ npm run prisma:seed --workspace=backend # Seed the database (if a seed script exists)
    ```

4.  **Run the applications:**

    ```console
    # Start the backend API server
    $ npm run dev --workspace=backend

    # Start the frontend web application
    $ npm run dev --workspace=frontend

    # Build and watch the browser extension (for development)
    $ npm run watch --workspace=extension
    # Or build for production
    $ npm run build --workspace=extension
    ```

    To run with Docker:

    ```console
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
