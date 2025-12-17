import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolioData';

export default function Projects() {
  return (
    <Section id="projects" className="bg-gray-50 dark:bg-dark-card/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
            Projetos Recentes
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <motion.div 
                whileHover={{ y: -8 }} // Aumentei um pouco a subida (de -5 para -8)
                transition={{ type: "spring", stiffness: 300 }} // Deixa o movimento mais elástico
                className="h-full flex flex-col bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 transition-all duration-300 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 group"
              >
                {/* --- ÁREA DA IMAGEM --- */}
                <div className="h-48 relative overflow-hidden bg-gray-800">
                  
                  {/* Lógica da imagem */}
                  {/* @ts-ignore */}
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 group-hover:from-gray-700 group-hover:to-primary-900/50 transition-colors duration-500" />
                  )}

                  {/* Overlay dos botões */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/20">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/20">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                {/* --- CONTEÚDO DO CARD --- */}
                <div className="p-6 flex-1 flex flex-col relative">
                  {/* Efeito decorativo sutil no fundo do texto */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-bl-[100px] -z-10 transition-all group-hover:bg-primary-500/10" />

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/5 group-hover:border-primary-500/30 group-hover:text-primary-400 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}