import React from 'react';

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');

    const query = 'Jurassic Park';
    const API_KEY = process.env.REACT_APP_API_KEY;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className='form' onSubmit={searchMovies}>
      <label htmlFor='query' className='label'>
        Movie Name
      </label>
      <input
        type='text'
        className='input'
        name='query'
        placeholder='i.e. Jurassic Park'
      />
      <button className='button' type='submit'>
        Search
      </button>
    </form>
  );
}

export default SearchMovies;
