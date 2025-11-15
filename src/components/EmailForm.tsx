import { useState } from 'react'
import type { Project } from '../data/projects'

interface EmailFormProps {
  project: Project
  defaultEmail: string
}

const EmailForm = ({ project, defaultEmail }: EmailFormProps) => {
  const [studentName, setStudentName] = useState('Future Researcher')
  const [emailBody, setEmailBody] = useState(defaultEmail)

  const handleGenerate = () => {
    setEmailBody(prev => `${prev}\n\nP.S. Looking forward to collaborating!`)
  }

  return (
    <div className="bg-white border border-astral/20 rounded-2xl p-6 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-500">Project</label>
          <input value={project.title} readOnly className="w-full bg-astral-light/60 rounded-lg px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-500">Professor</label>
          <input value={project.professor} readOnly className="w-full bg-astral-light/60 rounded-lg px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-500">Keywords</label>
          <input value={project.keywords.join(', ')} readOnly className="w-full bg-astral-light/60 rounded-lg px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-500">Your name</label>
          <input
            value={studentName}
            onChange={e => setStudentName(e.target.value)}
            className="w-full border border-astral/40 rounded-lg px-3 py-2 mt-1"
          />
        </div>
      </div>
      <textarea
        value={emailBody}
        onChange={e => setEmailBody(e.target.value)}
        rows={8}
        className="w-full border border-astral/30 rounded-xl px-4 py-3 text-sm"
      />
      <div className="flex flex-wrap gap-3 items-center">
        <button onClick={handleGenerate} className="px-4 py-2 rounded-full bg-astral text-white text-sm">
          Enhance Email
        </button>
        <span className="text-xs text-slate-500">Logic is placeholder — plug in your own prompt chain.</span>
      </div>
    </div>
  )
}

export default EmailForm
