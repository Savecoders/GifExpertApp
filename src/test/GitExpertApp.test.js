import { shallow } from 'enzyme';
import GitExpertApp from '../GitExpertApp';

describe('render <GifExpertApp/>', () => {
	test('shallow components', () => {
		const wrapper = shallow(<GitExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});
});
