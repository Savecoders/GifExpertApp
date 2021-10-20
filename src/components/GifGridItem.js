export const GifGridItem = ({ title, url }) => {
	return (
		<div className='card animate__animated animate__fadeIn animate__delay-1s"'>
			<a href={url}>
				<i className='bx bx-link-alt bx-flip-horizontal bx-tada'></i>
			</a>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};
