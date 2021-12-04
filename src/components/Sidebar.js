import { NavLink } from 'react-router-dom';
import logo from '../images/netflix-logo.png';
import SidebarLink from './SidebarLink';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SecurityIcon from '@material-ui/icons/Security';
import '../styles/Sidebar.css'

function Sidebar() {
	return (
		<aside className='sidebar'>
			<img className='logoImg' src={logo} alt='netflix logo' />
			<div className='title title1'> Menu </div>
			<NavLink activeClassName='active' to='/'>
				<SidebarLink Icon={HomeIcon} text='Home' />
			</NavLink>
			<NavLink activeClassName='active' to='/tv'>
				<SidebarLink Icon={LiveTvIcon} text='TV Shows' />
			</NavLink>
			<NavLink activeClassName='active' to='/top_rated'>
				<SidebarLink Icon={MovieFilterIcon} text='Top Rated' />
			</NavLink>
			<NavLink activeClassName='active' to='/upcoming'>
				<SidebarLink Icon={WhatshotIcon} text='Upcoming' />
			</NavLink>
			<SidebarLink Icon={PlaylistPlayIcon} text='My List' />
			<div className='title title2'> Settings </div>
			<SidebarLink Icon={SubscriptionsIcon} text='Change Plan' />
			<SidebarLink Icon={SecurityIcon} text='Privacy' />
		</aside>
	);
}

export default Sidebar;
