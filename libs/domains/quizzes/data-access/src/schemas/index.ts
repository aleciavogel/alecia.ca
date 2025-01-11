import * as popQuizPageBlocks from './blocks'
// import * as popQuizDocuments from './documents'

export * from './blocks'
// export * from './documents'

// Dynamic export of all sanity schemas in the popQuiz domain
export const popQuizSchemas = [
  // ...Object.values(popQuizDocuments),
  ...Object.values(popQuizPageBlocks),
]
