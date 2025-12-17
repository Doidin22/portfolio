import { Code2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  return (
    <Section id="about" className="bg-gray-50 dark:bg-dark-card/50">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
            Sobre Mim
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {portfolioData.about}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code2 className="text-primary-500" /> Formação
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-lg">{portfolioData.education.course}</p>
                  <p className="text-gray-500 dark:text-gray-400">{portfolioData.education.school}</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs rounded bg-green-500/10 text-green-500 border border-green-500/20">
                    {portfolioData.education.status}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}