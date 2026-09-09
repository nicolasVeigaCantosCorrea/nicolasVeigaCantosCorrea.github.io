import { useLanguage } from '@/context/useLanguage';

function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="bg-gray-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4">
        <h1 className="text-4xl font-bold md:text-6xl">{t.home.title}</h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600 md:text-xl">
          {t.home.description}
        </p>
      </section>
    </main>
  );
}

export default HomePage;
