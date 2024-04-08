export const convertBigNumberToString = (number: number | undefined) => {
  if (number === undefined) return ''
  return number.toLocaleString('vi-VN')
}