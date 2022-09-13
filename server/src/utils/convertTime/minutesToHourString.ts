export function minutesToHourString(minutesAmount: number) {
  const hh = Math.floor(minutesAmount / 60)
  const mm = minutesAmount % 60
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
}
