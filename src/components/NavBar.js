const NavBar = ({ title }) => {
	return (
		<nav className='navigation'>
			<h2 className='animate__animated animate__fadeIn'>
				<i class='bx bxs-gift' />
				{title}
			</h2>
		</nav>
	);
};

export default NavBar;
