export interface SavedQuizDetails {
  selected: number[]
  correct: boolean
}

export type SavedQuizzes = Record<string, SavedQuizDetails>
