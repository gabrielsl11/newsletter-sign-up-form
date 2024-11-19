import { Check } from "lucide-react"
import illustration from "./images/illustration-sign-up-desktop.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function App() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  function onSubscribeClick(e) {
    e.preventDefault()

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!isValidEmail) {
      setError(true)
      return
    }

    setError(false)
    navigate(`/successalert`, { state: { email } })
  }
  return (
    <div className="flex p-6 gap-4 rounded-3xl bg-slate-100">
      <form onSubmit={onSubscribeClick} className="flex flex-col justify-center p-4 gap-4">
        <h1 className="text-5xl font-medium">Stay updated!</h1>

        <p className="w-[350px] text-sm">Join 60,000+ product managers receiving monthly updates on:</p>

        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-orange-600 p-1">
            <Check size={12} className="text-white rounded-full" />
          </div>
          <span className="text-sm">Product discovery and building what matters</span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-orange-600 p-1">
            <Check size={12} className="text-white rounded-full" />
          </div>
          <span className="text-sm">Measuring to ensure updates are a success</span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-orange-600 p-1">
            <Check size={12} className="text-white rounded-full" />
          </div>
          <span className="text-sm">And much more!</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium">Email address</span>
          {error && <span className="text-red-500 text-sm">Valid email required</span>}
        </div>

        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`p-4 rounded-md border ${error ? "border-red-500 bg-red-100" : "border-slate-300"
          } focus-visible:outline transition`} placeholder="email@company.com" />

        <button type="submit" className="p-4 rounded-md text-white font-medium bg-slate-800 active:bg-gradient-to-r from-pink-500 to-orange-500 transition">Subscribe to monthly newsletter</button>
      </form>

      <img src={illustration} alt="illustration-sign-up-desktop" />
    </div>
  )
}

export default App
