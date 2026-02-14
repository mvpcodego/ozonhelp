import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const Home = () => {
  const featured = articles.find((article) => article.featured) || articles[0];
  const latest = articles.filter((article) => article.slug !== featured.slug);

  return (
    <div className="space-y-10">
      <section className="rounded-[32px] border border-white/70 bg-gradient-to-br from-white via-white to-amber-50 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900/60">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-black/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white dark:bg-white dark:text-slate-900">
            Закреплено
          </span>
          <span>{featured.readMinutes} мин</span>
        </div>
        <h1 className="font-display mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
          {featured.title}
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {featured.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-white px-3 py-1 shadow-sm dark:bg-slate-800/70">
            {featured.date}
          </span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm dark:bg-slate-800/70">
            TEYES CC3L
          </span>
        </div>
        <Link
          to={`/article/${featured.slug}`}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
        >
          Читать инструкцию
        </Link>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Новые статьи
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Обновления и советы
          </span>
        </div>
        <div className="mt-5 grid gap-4">
          {latest.map((article) => (
            <Link
              key={article.slug}
              to={`/article/${article.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                <span>{article.tag}</span>
                <span>{article.readMinutes} мин</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-slate-900 dark:text-white dark:group-hover:text-white">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{article.date}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800/70">
                  {article.category.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
