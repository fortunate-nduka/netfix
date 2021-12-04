import { Routes, Route } from 'react-router-dom';
import Popular from './components/Popular';
import TvShows from './components/TvShows';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import PageNotFound from './components/PageNotFound';
import './styles/Content.css';
import './styles/Movies.css';
import { DataProvider } from './contexts/DataContext';

function App() {
	return (
		<DataProvider>
			<Routes>
				<Route path='/' element={<Popular />} />
				<Route path='/tv' element={<TvShows />} />
				<Route path='/top_rated' element={<TopRated />} />
				<Route path='/upcoming' element={<Upcoming />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</DataProvider>
	);
}

export default App;
