import type { Project } from '../data/projects'

export const generateEmail = (project: Project, studentName = 'Future Researcher') => {
  const keywords = project.keywords.join(', ')
  return `Hi ${project.professor},\n\nMy name is ${studentName} and I'm excited about your project "${project.title}" in the ${project.department} department. I have been focusing on ${keywords} and would love to learn more about how I can contribute to your team.\n\nWould you be open to a short meeting to discuss possible next steps?\n\nThank you for your time,\n${studentName}`
}
