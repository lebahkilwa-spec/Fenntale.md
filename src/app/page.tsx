export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter gold-glow italic">
          FENNTEL
        </h1>
        <p className="text-gold-light text-lg md:text-xl max-w-md mx-auto">
          Welcome to Fenntel, where coffee, music, and books meet.
        </p>
        
        <div className="mt-10">
          <button className="btn-gold">
            Explore Collection
          </button>
        </div>
      </div>

      {/* لمسة جمالية: دائرة ذهبية خلفية خفيفة */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[120px] -z-10" />
    </main>
  );
}

