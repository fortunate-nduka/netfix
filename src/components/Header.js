import SearchIcon from '@material-ui/icons/Search';
import TMDBLogo from '../images/tmdb logo.svg';
import '../styles/Header.css';
import { useContext } from 'react';
import DataContext from '../contexts/DataContext';

function Header() {
	const { searchTerm, setSearchTerm } = useContext(DataContext);
	return (
		<header className='header'>
			<form className='headerForm' onSubmit={(e) => e.preventDefault()}>
				<SearchIcon className='SearchIcon' />
				<input
					type='text'
					placeholder='Search...'
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
			</form>
			<img className='headerLogo' src={TMDBLogo} alt='tmdb Logo' />
		</header>
	);
}

export default Header;
