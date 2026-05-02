export function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'currency',
  })
}

export function formatIntegerThousands(value: string) {
  if (!value) return ''
  if (value.length <= 3) return value
  return Number(value).toLocaleString('en-US', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  })
}

export function normalizeDigitsOnly(value: string) {
  return value.replace(/\D/g, '')
}
