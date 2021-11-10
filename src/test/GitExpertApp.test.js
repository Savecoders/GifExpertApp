import { shallow } from 'enzyme';
import GitExpertApp from '../GitExpertApp';

describe('render <GifExpertApp/>', () => {
	test('shallow components', () => {
		const wrapper = shallow(<GitExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});
	test('have categories', () => {
		const categories = ['One Puch', 'Hunter X Hunters'];
		const wrapper = shallow(<GitExpertApp defaultCategoies={categories} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});
