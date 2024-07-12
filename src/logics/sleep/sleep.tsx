/**
 * スリープ処理
 * @param ms スリープのミリ秒
 * @returns なし
 */
export const sleep = async (ms: number) => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};
