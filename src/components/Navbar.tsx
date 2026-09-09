import { useLanguage } from '@/context/useLanguage';

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="font-bold text-gray-800 hover:text-gray-600">
          Nicolas
        </a>
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
        <button
          onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          className="text-gray-800 hover:text-blue-600"
        >
          {language === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
