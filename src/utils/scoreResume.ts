export type ResumeInput = {
  skills: string
  experiences: string
  gpa: string
  keywords: string
}

export const scoreResume = (input: ResumeInput): number => {
  const base = 50
  const bonus = [input.skills, input.experiences, input.gpa, input.keywords]
    .filter(Boolean)
    .reduce((acc, field) => acc + Math.min(field.length * 0.2, 10), 0)

  return Math.min(100, Math.round(base + bonus))
}
