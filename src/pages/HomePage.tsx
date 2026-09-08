import { useLanguage } from '@/context/useLanguage';

function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>{t.home.title}</h1>
      <p>{t.home.description}</p>
    </div>
  );
}
export default HomePage;
