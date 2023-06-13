/**
 * 获取指定范围随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 指定范围内随机数
 */
export function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

/**
 * 获取指定范围随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 指定范围内随机整数
 */
export function randomInt(min: number, max: number) {
  return Math.round(random(min, max))
}
