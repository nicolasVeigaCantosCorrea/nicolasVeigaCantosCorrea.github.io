import { useLanguage } from '@/context/useLanguage';

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="font-bold text-gray-800 hover:text-gray-600">
          Nicolas
        </a>

        <div className="flex items-center gap-10">
          <a href="/" className="text-gray-800 hover:text-gray-600">
            {t.navbar.home}
          </a>
          <a href="/projects" className="text-gray-800 hover:text-gray-600">
            {t.navbar.projects}
          </a>
          <a href="/experience" className="text-gray-800 hover:text-gray-600">
            {t.navbar.experience}
          </a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600">
            {t.navbar.contact}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="text-gray-800 hover:text-blue-600"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
