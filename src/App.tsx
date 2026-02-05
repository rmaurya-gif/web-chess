function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="p-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-white">
          Tailwind is WORKING 🚀
        </h1>

        <p className="mt-4 text-white/80">
          If you see a gradient card on a black background, v4 is wired
          correctly.
        </p>

        <button className="mt-6 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:scale-105 transition">
          Hover me
        </button>
      </div>
    </div>
  );
}

export default App;
