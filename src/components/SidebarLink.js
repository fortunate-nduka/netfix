import '../styles/Sidebar.css';

function SidebarLink({ Icon, text }) {
	return (
		<div className='sidebarLink'>
			<Icon className='sidebarIcon' />
			<div className='sidebarLinkText'>{text}</div>
		</div>
	);
}

export default SidebarLink;
