import { NextResponse } from 'next/server'

import { getDb, initDb } from '../db'

// Initialize database on module load
let dbInitialized = false
const initPromise = initDb().then(() => (dbInitialized = true))

export async function GET() {
  const records = await getAllRecords()
  const cleaned = records.map((record, index) => {
    return (
      index +
      1 +
      '. ' +
      new Date(record.created_at * 1000).toLocaleString() +
      ': ' +
      safeRound(JSON.parse(record.result).result)
    )
  })
  return NextResponse.json(cleaned.reverse())
}

async function getAllRecords() {
  if (!dbInitialized) await initPromise

  const db = getDb()

  return (await db.execute({ sql: 'SELECT * FROM payloads' })).rows as unknown as {
    created_at: number
    result: string
  }[]
}

function safeRound(value: null | number) {
  if (value === null) return null
  return Math.round(value * 100) / 100
}
