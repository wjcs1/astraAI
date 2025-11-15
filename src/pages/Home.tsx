import { Link } from 'react-router-dom'
import MailingList from '../components/MailingList'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Home = () => {
  const heroProjects = projects.slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <p className="inline-flex px-4 py-1 rounded-full bg-white text-astral-dark text-xs uppercase tracking-wide">Research made friendly</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Astra helps students launch research careers</h1>
          <p className="text-lg text-slate-600">
            Discover faculty projects, develop your resume, and send thoughtful cold emails — all from one curated hub.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/resume-tools" className="px-5 py-3 rounded-full bg-astral text-white font-semibold">
              Develop Your Research Skills
            </Link>
            <Link to="/projects" className="px-5 py-3 rounded-full bg-white border border-astral/30 text-astral-dark font-semibold">
              Search Faculty Research
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl border border-astral/20 p-6 space-y-4">
          <p className="text-sm text-slate-500">Upcoming workshops</p>
          <ul className="space-y-3 text-sm">
            <li className="p-4 rounded-2xl bg-astral-light/80">
              <strong>Resume Sprint</strong> – Build a one-page research-ready resume.
            </li>
            <li className="p-4 rounded-2xl bg-astral-light/60">
              <strong>Faculty Match</strong> – Learn how to evaluate lab fit.
            </li>
            <li className="p-4 rounded-2xl bg-astral-light/40">
              <strong>Email Lab</strong> – Practice cold outreach with peers.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Search Faculty Research</h2>
          <Link to="/projects" className="text-sm text-astral-dark font-semibold">
            Explore all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {heroProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <MailingList />
    </div>
  )
}

export default Home
