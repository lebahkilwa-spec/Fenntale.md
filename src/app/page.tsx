export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* خلفية مضيئة خفيفة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="text-center z-10 px-6">
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-gold italic drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] mb-4">
          FENNTEL
        </h1>
        
        <p className="text-gold/80 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-10">
          Welcome to Fenntel, where <span className="text-gold font-medium">coffee</span>, 
          <span className="text-gold font-medium"> music</span>, and 
          <span className="text-gold font-medium"> books</span> meet.
        </p>
        
        <button className="group relative px-8 py-4 bg-transparent border border-gold text-gold font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-gold hover:text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          Explore Collection
        </button>
      </div>
    </main>
  );
}
