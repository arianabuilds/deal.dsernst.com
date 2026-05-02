const cache = new Map<string, number>()

export function calcRandFairResult(
  sellerMin: number,
  buyerMax: number,
  overlapOnly: boolean,
): { hasOverlap: boolean; result: null | number } {
  if (sellerMin > buyerMax) return { hasOverlap: false, result: null }

  if (overlapOnly) return { hasOverlap: true, result: null }

  // Don't re-roll for the same inputs (switching local-mode tabs)
  const key = `${sellerMin}:${buyerMax}`
  if (cache.has(key)) return { hasOverlap: true, result: cache.get(key)! }

  // Pick a random point in the middle 50% of the overlap (bottom/top 25% out of bounds)
  const spread = buyerMax - sellerMin
  const middleHalf = spread * 0.5
  const randomFactor = Math.random() * middleHalf
  const result = sellerMin + spread * 0.25 + randomFactor
  cache.set(key, result)

  return { hasOverlap: true, result }
}
