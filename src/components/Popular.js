import { useContext, useEffect } from 'react';
import DataContext from '../contexts/DataContext';
import axios from 'axios';
import Spinner from './Spinner';
import Movie from './Movie';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import '../styles/Content.css';
import '../styles/Movies.css';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Sidebar.css';

function Popular() {
	const { movies, setMovies, page, searchTerm, loading, setLoading } =
		useContext(DataContext);

	const API_KEY = '2e1b1833046bb0966cc107c440e51fe6';
	const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
	const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

	useEffect(() => {
		if (searchTerm) {
			const fetchMovies = async () => {
				try {
					const res = await axios.get(SEARCH_URL + searchTerm);
					const moviesR = res.data;
					setMovies(moviesR.results);
				} catch (err) {
					<h1>Something Went Wrong</h1>;
				}
			};
			fetchMovies();
		} else {
			const fetchMovies = async () => {
				setLoading(true);
				try {
					const res = await axios.get(API_URL);
					const moviesR = res.data;
					setMovies(moviesR.results);
					setLoading(false);
				} catch (err) {
					<h1>Something Went Wrong</h1>;
				}
			};
			fetchMovies();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, searchTerm]);

	return (
		<div className='container'>
			<Sidebar />
			<div className='content'>
				<Header />
				<div className='moviesContainer'>
					{loading ? (
						<Spinner />
					) : (
						movies.map((movie) => <Movie key={movie.id} {...movie} />)
					)}
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Popular;
