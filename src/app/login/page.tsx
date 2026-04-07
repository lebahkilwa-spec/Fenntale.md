"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // سنقوم بربط هذا بالجزء البرمجي لاحقاً
    if (password === "") {
        setError("من فضلك أدخل كلمة السر");
    } else {
        alert("سنتصل بقاعدة البيانات في الخطوة القادمة!");
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl border border-gold/30 bg-zinc-950 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold gold-glow italic mb-2">FENNTEL</h2>
          <p className="text-gold/60">لوحة التحكم الخاصة بالمدير</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">كلمة السر السرية</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-all text-gold"
              placeholder="••••••••"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button type="submit" className="w-full btn-gold">
            دخول للمملكة 👑
          </button>
        </form>
      </motion.div>
    </main>
  );
}
