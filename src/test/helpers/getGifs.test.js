import { getGifs } from '../../helpers/getGifs';

describe('test in getGifs', () => {
	test('get gifs', async () => {
		const gifs = await getGifs('Hunter X Hunter');
		expect(gifs.length).toBe(10);
	});

	test('haven`t category', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});
