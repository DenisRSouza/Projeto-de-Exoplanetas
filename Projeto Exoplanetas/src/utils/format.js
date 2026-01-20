export function formatNumber(n, digits=2){
  if(n == null) return '—'
  const num = Number(n)
  if(Number.isNaN(num)) return '—'
  return num.toFixed(digits)
}
