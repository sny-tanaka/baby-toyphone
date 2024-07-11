/**
 * 指定された年月の月初と月末を返す
 * @param year 年
 * @param month 月
 * @returns 月初と月末のマップ
 */
export const getMonthRange = ({ year, month }: Param): Result => {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  return { startDate, endDate };
};

type Param = {
  year: number;
  month: number;
};

type Result = {
  startDate: Date;
  endDate: Date;
};
