import { useState } from 'react'

const MailingList = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Mailing list signup:', email)
    setStatus('success')
    setEmail('')
  }

  return (
    <div className="bg-white rounded-2xl border border-astral/20 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-astral-dark">Join the Astra mailing list</h3>
      <p className="text-sm text-slate-600 mb-4">Stay updated on new faculty projects and resume workshops.</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.edu"
          className="flex-1 border border-astral/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-astral"
        />
        <button type="submit" className="px-4 py-2 rounded-full bg-astral text-white text-sm">
          Join list
        </button>
      </form>
      {status === 'success' && (
        <div className="mt-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
          Success! Check your inbox for a confirmation email.
        </div>
      )}
    </div>
  )
}

export default MailingList
