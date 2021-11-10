import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3 className='mg-3vw animate__animated animate__fadeIn'>
				<i class='bx bxs-right-arrow bx-xs' /> {category}
			</h3>
			{loading && (
				<p className='animate__animated animate__flash'>
					<i className='loading bx bx-loader-alt bx-spin'></i>
				</p>
			)}
			<div className='card-grid '>
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
export default GifGrid;
