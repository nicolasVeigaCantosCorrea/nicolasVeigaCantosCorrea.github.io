import { useLanguage } from '@/context/useLanguage';

function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="bg-gray-100">
      {/* 8rem = (navbar + footer size) */}
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold md:text-6xl">{t.notFound.title}</h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600 md:text-xl">
          {t.notFound.description}
        </p>
        <a
          href="/"
          className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {t.notFound.button}
        </a>
      </section>
    </main>
  );
}
export default NotFound;
