# Movie App

Movie App is a web application that allows users to search for movies, view detailed information, and save their favorite movies. The app integrates the OMDb API to fetch movie data and includes features like filtering movies by year and managing a list of favorites. The app is deployed on Vercel and available [here](https://movie-app-alpha.vercel.app/).

## Features

- Search for movies by title.
- Filter movies by release year.
- Save favorite movies to view later. Click 'Favourites' to view favorite movies, and click it again to exit the favorites section.

## Technologies Used

- **React.js**: Frontend framework.
- **Tailwind CSS**: Styling and layout.
- **DaisyUI**: Used for pre-built, customizable components and responsive design.
- **OMDb API**: Movie data source.
- **Vercel**: Hosting and deployment platform.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Setting Up API Key

1. Sign up for an API key from the [OMDb API](http://www.omdbapi.com/apikey.aspx).
2. Create a `.env` file in the root directory of the project:
   ```bash
   touch .env
   ```
3. Add your API key to the `.env` file:
   ```bash
   REACT_APP_OMDB_API_KEY=your-api-key-here
   ```

### Running the App

To start the app locally, run:

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

## Future Enhancements

- **UI Improvements**: Additional filters for genre, country, or language.
- **Media Integration**: Display trailers or additional movie-related media.
- **Custom Rating System**: Allow users to rate movies and store ratings within the app.
- **Sorting Options**: Sort movies based on ratings, release dates, or popularity.

## Deployed Version

You can access the live version of the app [here](https://movie-app-alpha.vercel.app/).

---

Let me know if you'd like any changes!
