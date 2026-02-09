import React, { useState } from 'react';

export default function Contact({ isDark, data }) {
  const [status, setStatus] = useState("");

  if (!data || !data.socials) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const form = e.target;
    const formData = new FormData(form);

    // ZEVENDESOHO 'your-id' me Endpoint ID tend nga Formspree
    const response = await fetch("https://formspree.io/f/mwvnppdv", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className={`py-24 px-6 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className={`max-w-4xl mx-auto border rounded-[3rem] p-10 md:p-16 transition-all duration-500 ${
        isDark ? 'border-white/10 bg-white/5' : 'border-blue-100 bg-white shadow-xl shadow-blue-50'
      }`}>
        
        <h2 className={`text-4xl font-black mb-6 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {data.contactTitle || "Dërgo një Mesazh"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Emri juaj / Your Name" 
              required
              className={`w-full p-4 rounded-2xl border bg-transparent outline-none transition-all ${
                isDark ? 'border-white/10 text-white focus:border-blue-500' : 'border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email-i juaj / Your Email" 
              required
              className={`w-full p-4 rounded-2xl border bg-transparent outline-none transition-all ${
                isDark ? 'border-white/10 text-white focus:border-blue-500' : 'border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
            />
          </div>
          
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Mesazhi juaj / Your Message" 
            required
            className={`w-full p-4 rounded-2xl border bg-transparent outline-none transition-all ${
              isDark ? 'border-white/10 text-white focus:border-blue-500' : 'border-slate-200 text-slate-900 focus:border-blue-500'
            }`}
          ></textarea>

          <button 
            type="submit" 
            disabled={status === "sending"}
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {status === "sending" ? "Duke u dërguar..." : "Dërgo Mesazhin / Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-500 text-center font-bold">Mesazhi u dërgua me sukses! ✓</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center font-bold">Ndodhi një gabim. Provoni përsëri.</p>
          )}
        </form>
      </div>
    </section>
  );
}