import { Link } from 'react-router-dom';
import PageNotFoundImg from '../images/notFoundImg.png';
import Sidebar from './Sidebar';
import Header from './Header';
import '../styles/Content.css';
import '../styles/Movies.css';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Sidebar.css';

function PageNotFound() {
	return (
		<div className='container'>
			<Sidebar />
			<div className='content'>
				<Header />
				<div className='missing'>
					<img className='missingImg' src={PageNotFoundImg} alt='' />
					<div className='missingText'>page not found :)</div>
					<Link className='missingLink' to='/'>
						Go Back to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PageNotFound;
