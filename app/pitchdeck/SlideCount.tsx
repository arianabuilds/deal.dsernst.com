const TOTAL = 10

export function SlideCount({ n }: { n: number }) {
  return (
    <p className="font-mono text-sm text-gray-500">
      {String(n).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
    </p>
  )
}
