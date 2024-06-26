# GameHub Project

Welcome to the GameHub Project repository! This project is a game catalog application built with React.js, utilizing the RAWG API to provide a comprehensive collection of games. The application allows users to browse, filter, and categorize games easily.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [License](#license)

## Introduction

The GameHub Project is a web application that serves as a game catalog. It fetches game data from the RAWG API and provides an interactive interface for users to explore a wide range of games. Users can browse through different categories, apply filters, and view detailed information about each game.

## Features

- **Game Catalog**: Browse a vast collection of games fetched from the RAWG API.
- **Categorization**: Games are categorized for easy navigation.
- **Filters**: Apply filters to narrow down the search results based on different criteria.
- **Detailed Game Information**: View detailed information about each game, including descriptions, ratings, and more.

## Setup and Installation

To run the GameHub Project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ThaikoZ/game-hub.git
    cd game-hub
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Open `src/services/api-client.ts` and add your RAWG API key** :

    ```plaintext
    const axiosInstance = axios.create({
      baseURL: "https://api.rawg.io/api",
      params: {
        key: "",
      },
    });
    ```

4. **Start the development server**:

    ```bash
    npm run dev
    ```

5. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

- **Browse Games**: Navigate through the catalog to discover new games.
- **Filter Games**: Use the filter options to find games based on genres, platforms, ratings, and more.
- **Search Games**: Use the search option to find games by title.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **RAWG API**: Source of game data.
- **Axios**: HTTP client for making API requests.
- **React Router**: For routing and navigation.
- **CSS Modules**: For styling components.
- **Chakra UI**: For ready components.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to explore the [GameHub Project](https://cd-game-hub.netlify.app/) and enjoy browsing through the extensive game catalog!
