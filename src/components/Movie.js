import React from 'react';
import '../styles/Movies.css';

function Movie({ poster_path, id, original_title }) {
	const IMG_API = 'https://image.tmdb.org/t/p/w1280/';

	return (
			<div className='movieImg'>
				<img src={`${IMG_API}${poster_path}`} alt='' />
			</div>
	);
}

export default Movie;
