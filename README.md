# README for Chat Application

This README provides an overview of a chat application built with React and various custom hooks for fetching, filtering, and managing chat data.

## Overview

The chat application allows users to interact with agents, send messages, and manage chat sessions. It leverages React hooks for state management and side effects, and it includes a server-side component for fetching and posting data.

## Features

- Agent selection and search functionality
- Real-time chat interface
- Ability to clear the chat history
- Server-side agent data fetching and message streaming

## Installation

To get started with the chat application, clone the repository and install the necessary dependencies.

```bash
git clone <repository-url>
cd <repository-directory>
npm install or pnpm install
```

## Usage

To run the application, you can use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

## Components

### `Home`

The main component that renders the chat interface. It includes:

- A dropdown to select an agent
- A search input to filter agents
- A chat display area to show messages
- An input area to type and send new messages
- A button to clear the chat

### Custom Hooks

#### `useChat`

Manages the chat state, including messages, input changes, and submission.

#### `useFetchAgents`

Fetches the list of agents from the server and manages the selected agent state.

#### `useFilteredAgents`

Filters the agents based on the search input.

#### `useCleanChat`

Provides functionality to clear the chat history.

## Server-Side

### `GET`

Handles fetching the list of agents from the server.

### `POST`

Handles sending messages to the server and streaming the response back to the client.

## Types

## Contributing

Defines the structure of an agent object used throughout the application.

## Development

The application is set up with a modern React development environment. You can extend or modify the components and hooks as needed.

## Contributing

Contributions to the application are welcome. Please ensure that your code adheres to the existing style and that all tests pass before submitting a pull request.

##  `URL`

https://nextjs-chat-extension-git-main-adel242s-projects.vercel.app/
