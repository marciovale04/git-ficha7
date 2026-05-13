import { useEffect, useState } from 'react';

import TableView from '../components/TableView';

import { getPopularMovies } from '../services/tmdb';

function FilmesTable() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadMovies() {

      const data = await getPopularMovies();

      const filmesFormatados = data.map((movie) => ({

        id: movie.id,
        nome: movie.title,
        ano: movie.release_date?.split('-')[0]

      }));

      setFilmes(filmesFormatados);
    }

    loadMovies();

  }, []);

  return (

    <div className="m-4">

      <h1>Lista de Filmes - Tabela</h1>

      <TableView data={filmes} />

    </div>

  );
}

export default FilmesTable;