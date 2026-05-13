import axios from 'axios';

const api = axios.create({

  baseURL: 'https://api.themoviedb.org/3'

});

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzllM2JhZWQzYzgyMjAyNWEyNjdlZGFmMmIwZmExYyIsIm5iZiI6MTc3MzMzODc0OC4yMTYsInN1YiI6IjY5YjMwMDdjYzc1YjZlMjQxNDgxNzk1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vo7Fkfw6c28EkK2E89ZDQEBgaI4VVI9J3ONDtq8-5BU';

export const getPopularMovies = async () => {

  const response = await api.get(

    '/movie/popular',

    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }

  );

  return response.data.results;
};