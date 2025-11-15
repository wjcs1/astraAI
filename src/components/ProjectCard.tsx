import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-white border border-astral/20 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <p className="text-xs uppercase tracking-wide text-astral">{project.department}</p>
        <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
        <p className="text-sm text-slate-500 mb-2">{project.professor}</p>
        <p className="text-sm text-slate-600">{project.shortDescription}</p>
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full bg-astral text-white text-sm"
      >
        View Details
      </Link>
    </div>
  )
}

export default ProjectCard
