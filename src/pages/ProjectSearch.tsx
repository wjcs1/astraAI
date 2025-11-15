import { useMemo, useState } from 'react'
import { departments } from '../data/departments'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const ProjectSearch = () => {
  const [selectedDept, setSelectedDept] = useState('Biology')

  const filteredProjects = useMemo(() => projects.filter(project => project.department === selectedDept), [selectedDept])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-astral">Flow 2</p>
        <h1 className="text-4xl font-bold text-slate-900">Search Faculty Research</h1>
        <p className="text-lg text-slate-600">Choose a department to see curated project cards with key details.</p>
      </header>

      <div className="bg-white border border-astral/20 rounded-2xl p-6 shadow-sm flex flex-wrap gap-4 items-center">
        <label className="text-sm font-semibold text-slate-600">Department</label>
        <select
          value={selectedDept}
          onChange={event => setSelectedDept(event.target.value)}
          className="px-4 py-2 rounded-full border border-astral/30 text-sm"
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filteredProjects.length === 0 && <p>No projects yet. Add some in src/data/projects.ts.</p>}
      </div>
    </div>
  )
}

export default ProjectSearch
