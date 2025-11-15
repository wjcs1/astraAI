import { useRef, useState } from 'react'

const ResumeUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [fileName, setFileName] = useState<string>('No file chosen')

  const handleUpload = () => {
    const file = inputRef.current?.files?.[0]
    setFileName(file ? file.name : 'No file chosen')
    console.log('Pretend upload:', file)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-astral/20">
      <h3 className="text-lg font-semibold text-astral-dark mb-2">Resume Upload</h3>
      <p className="text-sm text-slate-500 mb-4">Drop a PDF or DOCX. This demo simply logs the file object.</p>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.doc,.docx"
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-astral file:text-white"
      />
      <button onClick={handleUpload} className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-astral text-white text-sm">
        Upload Placeholder
      </button>
      <p className="text-xs text-slate-500 mt-2">{fileName}</p>
    </div>
  )
}

export default ResumeUpload
