import { motion } from 'framer-motion';
import { Code2, Terminal, Server, Database } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolioData';

// Função auxiliar para pegar o ícone certo
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Terminal': return <Terminal size={24} />;
    case 'Server': return <Server size={24} />;
    case 'Database': return <Database size={24} />;
    default: return <Code2 size={24} />;
  }
};

export default function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
            Tech Stack
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {portfolioData.skills.map((skill, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 rounded-xl shadow-sm hover:border-primary-500/50 transition-colors group"
              >
                <div className="text-gray-400 group-hover:text-primary-500 transition-colors mb-2">
                  {getIcon(skill.icon)}
                </div>
                <span className="font-medium text-sm">{skill.name}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}