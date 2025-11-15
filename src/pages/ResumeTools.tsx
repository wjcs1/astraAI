import ResumeUpload from '../components/ResumeUpload'
import ResumeScore from '../components/ResumeScore'

const ResumeTools = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-astral">Flow 1</p>
        <h1 className="text-4xl font-bold text-slate-900">Develop Your Research Skills</h1>
        <p className="text-lg text-slate-600">
          Combine a resume builder, uploads, and automated scoring modules to simulate your research readiness. All actions use
          placeholder functions so you can later connect a backend.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-astral/20 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-astral-dark mb-3">Resume Builder</h2>
            <div className="space-y-4">
              {['Education', 'Research Experience', 'Skills', 'Impact Statement'].map(section => (
                <div key={section}>
                  <label className="text-xs uppercase tracking-wide text-slate-500">{section}</label>
                  <input
                    placeholder={`Add ${section.toLowerCase()}...`}
                    className="w-full border border-astral/30 rounded-xl px-4 py-2 mt-1 text-sm"
                  />
                </div>
              ))}
              <button className="px-4 py-2 rounded-full bg-astral text-white text-sm">Save section (placeholder)</button>
            </div>
          </div>
          <ResumeUpload />
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-astral/20 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-astral-dark mb-4">Possible Inputs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Skills', 'Experiences', 'GPA', 'Keywords'].map(input => (
                <input
                  key={input}
                  placeholder={`Add ${input.toLowerCase()}`}
                  className="border border-astral/30 rounded-xl px-4 py-2 text-sm"
                />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">Use these inputs to auto-populate the resume score or a future AI assistant.</p>
          </div>
          <ResumeScore />
        </div>
      </div>
    </div>
  )
}

export default ResumeTools
