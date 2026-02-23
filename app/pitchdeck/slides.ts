export type Slide = {
  body?: string[]
  subtitle?: string
  title: string
  variant: SlideVariant
}

export type SlideVariant = 'benefit' | 'cta' | 'how' | 'problem' | 'title'

export const slides: Slide[] = [
  {
    subtitle: 'Digital Voting',
    title: 'Easy, Safe, & Smart',
    variant: 'title',
  },
  {
    body: [
      'Voting today is opaque, slow, and depends on trust in central systems.',
      'Audits are after the fact. Voters can’t verify their vote was counted.',
    ],
    title: 'The problem',
    variant: 'problem',
  },
  {
    body: [
      'Simple flows for voters. No crypto required.',
      'Familiar patterns: request a ballot, cast, confirm.',
    ],
    subtitle: 'Simple for voters',
    title: 'Easy',
    variant: 'benefit',
  },
  {
    body: [
      'Cryptographic integrity. Tamper-evident records.',
      'End-to-end verifiable without exposing choices.',
    ],
    subtitle: 'Security & integrity',
    title: 'Safe',
    variant: 'benefit',
  },
  {
    body: [
      'Modern tech: end-to-end verifiability, privacy-preserving tallying.',
      'Transparent process, private votes.',
    ],
    subtitle: 'Verifiable & private',
    title: 'Smart',
    variant: 'benefit',
  },
  {
    body: [
      'Request ballot → Cast privately → Tally without learning individual votes.',
      'Anyone can verify the count; no one can link a ballot to a voter.',
    ],
    title: 'How it works',
    variant: 'how',
  },
  {
    body: [
      'Your vote is secret. The outcome is public and checkable.',
      'Cryptography gives both, at once.',
    ],
    title: 'Privacy & verifiability',
    variant: 'how',
  },
  {
    body: [
      'Elections, surveys, governance, deal-making.',
      'Any setting where private inputs must lead to a trusted outcome.',
    ],
    title: 'Use cases',
    variant: 'how',
  },
  {
    body: [
      'Tools for verifiable computation and private inputs are ready.',
      'Time to move from “trust us” to “verify yourself.”',
    ],
    title: 'Why now',
    variant: 'how',
  },
  {
    subtitle: 'Private inputs → positive-sum outcomes',
    title: 'Get started',
    variant: 'cta',
  },
]
