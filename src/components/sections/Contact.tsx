import { Mail, Linkedin, Github } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolioData';

export default function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
            Vamos conversar?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-dark-card p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-white/5 shadow-xl">
          {/* Lado Esquerdo: Informações */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Entre em contato</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Estou disponível para novos projetos, estágios ou colaborações. 
              Sinta-se à vontade para me chamar em qualquer uma das redes abaixo.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <a 
                href={`mailto:${portfolioData.social.email}`} 
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors group"
              >
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium">{portfolioData.social.email}</span>
              </a>

              {/* LinkedIn */}
              <a 
                href={portfolioData.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors group"
              >
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="font-medium">Linkedin/RonaldAlencar</span>
              </a>

              {/* GitHub */}
              <a 
                href={portfolioData.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors group"
              >
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Github size={20} />
                </div>
                <span className="font-medium">Github/Doidin22</span>
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário Visual (Simulação) */}
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Obrigado! Entre em contato diretamente pelo email ao lado.'); }}>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Seu Nome</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                placeholder="Nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Seu Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                placeholder="exemplo@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                placeholder="Olá Ronald, vi seu portfólio e..."
              />
            </div>
            <button className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}