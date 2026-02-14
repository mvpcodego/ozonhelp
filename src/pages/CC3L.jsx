import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const CC3L = () => {
  const cc3lArticles = articles.filter((article) => article.category === "cc3l");

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
        <h1 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
          TEYES CC3L
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Подборка кратких инструкций по настройке, обновлению и звуку.
        </p>
      </div>

      <div className="grid gap-4">
        {cc3lArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/article/${article.slug}`}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/70"
          >
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800/70">
                {article.tag}
              </span>
              <span>{article.readMinutes} мин</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              {article.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CC3L;
