import { Link, useNavigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

const ProjectDetails = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-slate-600">Project not found.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-astral-dark underline">
          Go back
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <p className="text-sm uppercase tracking-wide text-astral">Flow 2 → Project Detail</p>
      <h1 className="text-4xl font-bold text-slate-900">{project.title}</h1>
      <p className="text-lg text-slate-600">{project.professor}</p>
      <div className="bg-white border border-astral/20 rounded-2xl p-6 shadow-sm space-y-4">
        <p className="text-base text-slate-700 leading-relaxed">{project.longDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.keywords.map(keyword => (
            <span key={keyword} className="px-3 py-1 rounded-full bg-astral-light text-sm text-astral-dark">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={`/projects/${project.id}/email`}
        className="inline-flex px-5 py-3 rounded-full bg-astral text-white font-semibold"
      >
        Generate Cold Email
      </Link>
    </div>
  )
}

export default ProjectDetails
