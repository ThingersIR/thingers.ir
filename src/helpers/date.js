import jalaali from "jalaali-js"

export const toJalali = date => {
  const { jd, jm, jy } = jalaali.toJalaali(date)
  return `${jy}/${jm}/${jd}`
}
