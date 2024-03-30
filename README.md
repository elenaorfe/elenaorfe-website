# Personal Website

## Description

This repository contains the source code for my personal website, which is built using `npm run workspaces` to manage both the frontend and backend repositories within a single repository.

## Installation

1. Clone the repository:

```
git clone https://github.com/elenaorfe/elenaorfe-website.git
```

2. Navigate to the project directory:

```
cd elenaorfe-website
```

3. Install dependencies using Yarn:

```
npm run install
```

4. Set up the environment variables:
   Inside the client package, create a `.env.local` file and add the following environment variables:

```
NEXT_PUBLIC_CHATBOT_URL=http://localhost:8989
NEXT_PUBLIC_CONTACT_URL=http://localhost:8787
```

## Getting Started

This project is structured into three main packages: client, worker-contact, worker-openai. Each package serves a specific purpose and can be developed and run independently.

### Frontend

Start the frontend development server:

```
npm run client:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Build the frontend development server:

```
npm run client:build
```

Start the frontend development server:

```
npm run client:start
```

### Contact Worker

Start the contact worker development server:

```
npm run backend-contact:dev
```

Deploy the contact worker development server:

```
npm run backend-contact:deploy
```

### OpenAI Worker

Start the Open AI worker development server:

```
npm run backend-openai:dev
```

Deploy the Open AI worker development server:

```
npm run backend-openai:deploy
```

## Husky Integration

This project utilizes Husky to enhance its development workflow. Husky is a tool that enables Git hooks within your repository, allowing for automated actions to be triggered at various points in the Git workflow. This project enforces pre-commit hooks to run automated tasks before commiting. Check `./husky/pre-commit` file.
