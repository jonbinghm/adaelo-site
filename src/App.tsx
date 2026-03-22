/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black overflow-y-auto selection:bg-black selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-8 flex items-center justify-between z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-black">Adaelo</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-black">
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-32 pb-24 relative overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] tracking-[0.3em] font-bold rounded-sm">
              The Future of Sound
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-[12vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter mb-12"
          >
            Upload <span className="italic font-light">your</span> music.<br />
            Fans stream it.<br />
            You get paid.
          </motion.h1>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-start md:items-end gap-12">
            <p className="text-xl md:text-3xl text-black max-w-xl leading-tight font-light">
              Adaelo is a music streaming platform connecting artists with their fans, patrons, and collaborators.
            </p>
            
            <motion.a
              href="https://adaelo.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 border-2 border-black px-10 py-5 rounded-full text-lg font-bold tracking-tighter transition-all cursor-pointer"
            >
              Join newsletter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Background Decorative Element */}
        <div className="absolute top-1/2 right-[-10%] translate-y-[-50%] opacity-[0.03] pointer-events-none select-none">
          <span className="text-[60vw] font-black leading-none">A</span>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#f5f5f5] border-t border-black/5">
        {/* Narrative Blocks */}
        {[
          {
            title: "Streaming saved music.",
            sub: (
              <>
                When piracy threatened the industry, streaming made music simple again—every song, everywhere, instantly. For a moment, it worked. <span className="line-through">It was perfect.</span>
              </>
            )
          },
          {
            title: "But as streaming scaled, platforms optimized for volume, not value.",
            sub: "Plays replaced people. Algorithms replaced taste. Payouts shrank as audiences grew."
          },
          {
            title: "Music became easier to hear and harder to sustain.",
            sub: (
              <>
                Today, artists release into an ocean, and listeners hear whatever <span className="line-through">music</span> floats to the top.
              </>
            )
          },
          {
            title: "Adaelo exists for what comes before that moment.",
            sub: "It’s a place for music to live early—before mass release, before algorithms. Artists share work directly with the people who care most. Listeners curate and share music through taste and perspective."
          },
          {
            title: "No ads. No engagement traps.",
            sub: "Just music, shared in context, on the artist’s terms."
          },
          {
            title: "Music deserves time to find its audience.",
            sub: "That future is Adaelo."
          }
        ].map((block, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-[50vh] flex flex-col items-center justify-center px-8 text-center max-w-5xl mx-auto py-24"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8 text-black">
              {block.title}
            </h2>
            <div className="text-xl md:text-2xl text-black font-medium leading-relaxed max-w-2xl">
              {block.sub}
            </div>
          </motion.div>
        ))}

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-60 text-center space-y-12 bg-white"
        >
          <div className="text-[15vw] font-bold tracking-tight leading-none text-black">
            Adaelo
          </div>
          <motion.a
            href="https://adaelo.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block bg-black text-white px-12 py-6 rounded-full text-xl font-bold tracking-widest cursor-pointer"
          >
            Join newsletter
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="p-12 bg-white text-black text-[10px] tracking-[0.5em] font-bold flex flex-col md:flex-row justify-between items-center gap-8 border-t border-black/5">
        <div className="flex items-center gap-2">
          <span>© 2026 Adaelo</span>
        </div>
        <div className="flex gap-12 text-black">
          <a href="https://x.com/streamadaelo" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">X</a>
          <a href="https://www.instagram.com/streamadaelo/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a>
          <a href="https://adaelo.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Substack</a>
        </div>
      </footer>
    </div>
  );
}
