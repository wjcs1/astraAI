import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import EmailForm from '../components/EmailForm'
import { generateEmail } from '../utils/generateEmail'

const ColdEmailGenerator = () => {
  const { projectId } = useParams()
  const project = useMemo(() => projects.find(p => p.id === projectId), [projectId])

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-slate-600">Project not found. Return to the project list.</p>
        <Link to="/projects" className="mt-4 inline-block text-astral-dark underline">
          Back to projects
        </Link>
      </div>
    )
  }

  const email = generateEmail(project)

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-astral">Flow 3</p>
        <h1 className="text-4xl font-bold text-slate-900">Cold Email Generator</h1>
        <p className="text-lg text-slate-600">Fields auto-fill with project information. Update copy to match your voice.</p>
      </header>

      <EmailForm project={project} defaultEmail={email} />

      <section className="bg-white border border-astral/20 rounded-2xl p-6 shadow-sm space-y-3">
        <h2 className="text-xl font-semibold text-astral-dark">More info on projects</h2>
        <p className="text-sm text-slate-600">
          Need more context? Check your department site, browse the undergraduate research office listings, or stop by lab open
          houses. Add helpful links here once you wire up real data.
        </p>
        <ul className="list-disc list-inside text-sm text-astral-dark">
          <li>
            <a className="underline" href="https://example.edu/research" target="_blank" rel="noreferrer">
              Undergraduate Research Office
            </a>
          </li>
          <li>
            <a className="underline" href="https://example.edu/calendar" target="_blank" rel="noreferrer">
              Lab open house calendar
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default ColdEmailGenerator
