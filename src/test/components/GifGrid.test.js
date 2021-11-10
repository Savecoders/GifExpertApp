import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('test in <GifGrid/>', () => {
	test('shallow GifGrid', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});
		const wrapper = shallow(<GifGrid category={'Hunter X Hunter'} />);
		expect(wrapper).toMatchSnapshot();
	});
	test('shallow items and render images', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/xddddddd/cosa.jpg',
				title: 'cosas de la vida',
			},
			{
				id: 'asdasd',
				url: 'https://localhost/xddddddd/cosa.jpg',
				title: 'cosas de la vida',
			},
			{
				id: 'aaaaaa',
				url: 'https://localhost/xddddddd/cosa.jpg',
				title: 'cosas de la vida',
			},
		];
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
		const wrapper = shallow(<GifGrid category={'Hunter X Hunter'} />);

		/* expect(wrapper).toMatchSnapshot(); */
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
