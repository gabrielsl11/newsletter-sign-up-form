import { Check } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function SuccessAlert() {
    const navigate = useNavigate()
    const location = useLocation()
    const email = location.state?.email || "No email provided"
    return (
        <section className="w-[450px] flex flex-col p-12 gap-6 rounded-3xl bg-slate-100">
            <div style={{ alignSelf: "start" }} className="rounded-full bg-gradient-to-r from-pink-500 to-orange-500 p-2">
                <Check size={32} className="text-white rounded-full" />
            </div>

            <h1 className="text-5xl font-medium">Thanks for subscribing!</h1>

            <p className="text-sm">
                A confirmation email has been sent to <b>{email}</b>.
                Please open it and click the button inside to confirm your subscription.
            </p>

            <button onClick={() => navigate(-1)} className="min-w-80 self-center p-4 rounded-md text-white font-medium bg-slate-800 active:bg-gradient-to-r from-pink-500 to-orange-500 transition">Dismiss message</button>
        </section>
    )
}

export default SuccessAlert