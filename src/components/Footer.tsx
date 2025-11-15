const Footer = () => {
  return (
    <footer className="bg-white border-t border-astral/30 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-2 text-sm text-slate-600">
        <p>Astra © {new Date().getFullYear()} • Built for curious students.</p>
        <p className="text-xs">Placeholder prototype — connect your own backend or CRM.</p>
      </div>
    </footer>
  )
}

export default Footer
