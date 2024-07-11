import { getMonthRange } from './getMonthRange';

describe('getMonthRange', () => {
  test('1月', () => {
    const { startDate, endDate } = getMonthRange({ year: 2022, month: 1 });
    expect(startDate).toEqual(new Date(2022, 0, 1));
    expect(endDate).toEqual(new Date(2022, 0, 31));
  });

  test('うるう年じゃない2月', () => {
    const { startDate, endDate } = getMonthRange({ year: 2022, month: 2 });
    expect(startDate).toEqual(new Date(2022, 1, 1));
    expect(endDate).toEqual(new Date(2022, 1, 28));
  });

  test('うるう年の2月', () => {
    const { startDate, endDate } = getMonthRange({ year: 2020, month: 2 });
    expect(startDate).toEqual(new Date(2020, 1, 1));
    expect(endDate).toEqual(new Date(2020, 1, 29));
  });
});
