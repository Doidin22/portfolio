import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolioData';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Decoração de Fundo (Blur) */}
      <div className="absolute top-20 left-[-10%] w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-6 w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* --- LADO ESQUERDO: TEXTO --- */}
          <div className="flex-1 text-center md:text-left">
            <Reveal>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-500 uppercase bg-primary-500/10 rounded-full border border-primary-500/20">
                Disponível para projetos
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Olá, eu sou <br />
                <span className="bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent">
                  {portfolioData.name}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                {portfolioData.role}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#projects" className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:-translate-y-1">
                  Ver Projetos
                </a>
                <a href="#contact" className="px-8 py-3 bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:-translate-y-1">
                  Contato
                </a>
              </div>

              {/* --- ÍCONES SOCIAIS (Agora Funcionando!) --- */}
              <div className="mt-8 flex gap-6 justify-center md:justify-start text-gray-500 dark:text-gray-400">
                
                <a 
                  href={portfolioData.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-500 hover:scale-110 transition-all"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>

                <a 
                  href={portfolioData.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-500 hover:scale-110 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>

                <a 
                  href={`mailto:${portfolioData.social.email}`} 
                  className="hover:text-primary-500 hover:scale-110 transition-all"
                  title="Enviar Email"
                >
                  <Mail size={24} />
                </a>

              </div>
              {/* ------------------------------------------- */}

            </Reveal>
          </div>

          {/* --- LADO DIREITO: FOTO --- */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <Reveal delay={0.2}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                {/* Círculo decorativo girando atrás */}
                <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 border-dashed animate-[spin_10s_linear_infinite]" />
                
                {/* Glow atrás da foto */}
                <div className="absolute inset-4 bg-gradient-to-tr from-primary-500 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse" />

                {/* A FOTO */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  {/* @ts-ignore */}
                  {portfolioData.profileImage ? (
                    // @ts-ignore
                    <img 
                      src={portfolioData.profileImage} 
                      alt={portfolioData.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl">
                      👋
                    </div>
                  )}
                </div>
              </motion.div>
            </Reveal>
          </div>

        </div>
        
        {/* Seta indicando scroll */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hidden md:block"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}