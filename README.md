# Chat Bot with Specialized Agents

This project consists of a chat bot where you can interact with different agents specialized in various topics. It utilizes the OpenAI API to generate intelligent responses and is developed using technologies such as React, Node.js, Next.js, Tailwind CSS, and Next UI for styles.

## Configuration

To use this chat bot, you need to obtain an API Key from OpenAI. You can acquire one by registering on [OpenAI](https://openai.com/blog/openai-api). Additionally, an Organization ID is requested, though this is not mandatory.

## Installation

To obtain a copy of this project on your local machine, follow these steps:

1. Clone this repository using Git:

    ```bash
    git clone https://repository-url.git
    ```

2. Navigate to the project directory:

    ```bash
    cd repository-name
    ```

3. Install dependencies using [PNPM](https://pnpm.io/):

    ```bash
    pnpm install
    ```

## Usage

Once you have obtained your API Key, you can configure it in the application. To do so, you can go to the login page (`/login`) and provide your API Key and Organization ID (if necessary).

Once the credentials are configured, you can start the application and begin interacting with the specialized agents.

    ```bash
    pnpm dev
    ```

## Project Structure

- **`pages/`**: Contains the application pages, including the main page (`Home`) and the login page (`Login`).
- **`components/`**: Here you'll find reusable components of the application, such as the welcome modal, the navigation bar, and other 
- **`stores/`**: Contains global states of the application using the `zustand` library.
- **`api/router.ts`**: This file contains the routing logic for the chat functionality. It handles incoming requests and sends messages to the appropriate agent for processing.
- **`api/agent.ts`**: Here you'll find the code related to interacting with the agents. It includes functions to retrieve agents from the server and send messages for processing.

## Contributing

If you'd like to contribute to this project, you're more than welcome to! You can open an issue to discuss new features or submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License.

## URL Proyect

**`Link`**
