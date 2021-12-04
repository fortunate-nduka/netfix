import '../styles/Footer.css';
import { useContext } from 'react';
import DataContext from '../contexts/DataContext';

const Footer = () => {
	const { setPage, movies, isLoading } = useContext(DataContext);

	return (
		<footer className='footer'>
			{movies.length !== 0 && !isLoading ? (
				<div className='loadMoreButton'>
					<button
						className='loadMore'
						onClick={() => setPage((prevState) => prevState - 1)}
					>
						Prev
					</button>
					<button
						className='loadMore'
						onClick={() => setPage((prevState) => prevState + 1)}
					>
						Next
					</button>
				</div>
			) : null}
		</footer>
	);
};

export default Footer;
