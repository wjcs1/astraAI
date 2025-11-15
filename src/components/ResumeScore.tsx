import { useState } from 'react'
import { scoreResume, type ResumeInput } from '../utils/scoreResume'

const defaultInput: ResumeInput = {
  skills: '',
  experiences: '',
  gpa: '',
  keywords: ''
}

const ResumeScore = () => {
  const [input, setInput] = useState<ResumeInput>(defaultInput)
  const [score, setScore] = useState<number | null>(null)

  const handleChange = (field: keyof ResumeInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(prev => ({ ...prev, [field]: event.target.value }))
  }

  const handleScore = () => {
    const calculated = scoreResume(input)
    setScore(calculated)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-astral/20 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-astral-dark">Resume Score</h3>
      <p className="text-sm text-slate-500">Provide quick signals and we’ll produce a placeholder score.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Object.keys(input).map(field => (
          <div key={field} className="flex flex-col">
            <label className="text-xs uppercase tracking-wide text-slate-500 mb-1">{field}</label>
            <input
              value={input[field as keyof ResumeInput]}
              onChange={handleChange(field as keyof ResumeInput)}
              className="border border-astral/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-astral"
              placeholder={`Describe your ${field}`}
            />
          </div>
        ))}
      </div>
      <button onClick={handleScore} className="self-start px-4 py-2 rounded-full bg-astral text-white text-sm">
        Generate Score
      </button>
      {score !== null && (
        <p className="text-2xl font-semibold text-astral-dark">Estimated score: {score}/100</p>
      )}
    </div>
  )
}

export default ResumeScore
