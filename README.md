`# Chat Bot with Specialized Agents. Code GPT

This project consists of a chat bot where you can interact with different agents specialized in various topics. It utilizes the Code GPT to generate intelligent responses and is developed using technologies such as React, Node.js, Next.js, Tailwind CSS, and API Next UI for styles

## Configuration

To use this chat bot, you need to obtain an API Key. You can acquire one by registering on [OpenAI](https://openai.com/blog/openai-api). Additionally, an Organization ID is requested, though this is not mandatory.

## Installation

To obtain a copy of this project on your local machine, follow these steps:

1. Clone this repository using Git:

    ```bash
    git clone [https://repository-url.git](https://github.com/Adel242/nextjs-chat-extension.git)
    ```

2. Navigate to the project directory:

    ```bash
    cd chat-nextjs-ai
    ```

3. Install dependencies using [PNPM](https://pnpm.io/):

    ```bash
    pnpm install
    ```

# Chat Bot Usage Instructions

## Obtaining an API Key

Before using the chat bot, you need to acquire an API Key by:

- Signing up at [Code GPT](https://codegpt.co) or [OpenAI](https://openai.com/blog/openai-api).
- In Code GPT, navigate to "ApiKeys" from the dropdown menu to create or use an existing API Key.
- Alternatively, use an existing OpenAI API Key by registering at [OpenAI](https://openai.com/blog/openai-api).
- Copy the generated or obtained API Key for application access.

## Configuring the API Key in the Application

To set up your API Key:

1. Go to the `Menu/Log in` page.
2. Enter your API Key into the designated text box.
3. Optionally, provide your Organization ID if required by your Code GPT setup.

## Starting the Application

- With credentials configured, select a Code GPT agent from the dropdown menu to begin interaction.

## Additional Information

- For further assistance, refer to the documentation at [Code GPT Developers](https://developers.codegpt.co/?utm_source=playground&utm_medium=referral) or [Open AI Documentation](https://platform.openai.com/docs/introduction).

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
