import { useLanguage } from '@/context/useLanguage';

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <nav className="border-b border-gray-500 bg-white-800 p-4 mb-4">
      <div className="flex gap-6">
        <a href="/" className="text-gray-800 hover:text-gray-600">
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
