import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('test in GifGridItem', () => {
	const propType = {
		title: 'Save',
		url: 'https://localhost/algo.jpg',
	};
	const wrapper = shallow(<GifGridItem {...propType} />);

	test('shallow GifGrid', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('have pagramm in component', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(propType.title);
	});

	test('have content in img from component', () => {
		const img = wrapper.find('img');
		const { src, alt } = img.props();
		expect(alt).toBe(propType.title);
		expect(src).toBe(propType.url);
	});
	test('have claseName', () => {
		const div = wrapper.find('div');
		const arrClassName = div.prop('className');
		expect(true).toBe(arrClassName.includes('card'));
	});
});
