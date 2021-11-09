import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('test in <AddCategory/>', () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);
	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});
	test('show addCategory', () => {
		expect(wrapper).toMatchSnapshot();
	});
	test('change input', () => {
		const input = wrapper.find('input');
		const value = 'hello word';
		input.simulate('change', { target: { value: value } });
		/* expect(wrapper.find('p').text().trim()).toBe(value); */
	});
	test('not resq', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).not.toHaveBeenCalled();
	});
});
