export default function Contact() {
  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto text-center border border-blue-500/20 rounded-3xl p-12 bg-blue-500/5">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-slate-400 mb-8 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:your.email@example.com" 
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-transform hover:scale-105"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}