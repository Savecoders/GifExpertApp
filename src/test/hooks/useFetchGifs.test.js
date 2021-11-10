import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
describe('test in hook useFetchGifs', () => {
	test('return state', () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One puch'));
		const { data, loading } = result.current;
		waitForNextUpdate();
		expect(data).toEqual([]);
		expect(loading).toBeTruthy();
	});
	test('return arrOfImages', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One puch'));
		await waitForNextUpdate();
		const { data } = result.current;
		expect(data.length).toBe(10);
	});
});
