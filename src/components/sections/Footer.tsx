import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-white/5">
      <p>© {new Date().getFullYear()} {portfolioData.name}. Code creates the future.</p>
    </footer>
  );
}