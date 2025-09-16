// API service to fetch movie data from The Movie Database (TMDB)
export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API,
    headers : {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API}`
    }
};

// Function to fetch movies based on a search query
export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${ encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });

    if (!response.ok) {
        throw new Error('Failed to fetch movies', response.statusText );
    }

    const data = await response.json();
    // Return the list of movies
    return data.results;
}


// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTdkMWU2ZjczZDljOWY2ZmE4ZWMyNDE5YjI0ZGM4OSIsIm5iZiI6MTc1NTk5NTIzNS44MzMsInN1YiI6IjY4YWE1YzYzNTRhY2I2ZWZiNTU0N2Y4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zb2mGVyJfsS4b2B1yqaKQYZDIWT61jmVqrjgwW01ak8'
//   }
// };

// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));