import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";

const Article = () => {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
        <h1 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
          Статья не найдена
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Проверьте ссылку или вернитесь на главную страницу.
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
        >
          Вернуться на главную
        </Link>
      </div>
    );
  }

  const related = articles.filter(
    (item) => item.slug !== article.slug && item.category === article.category
  );

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800/70">
            {article.tag}
          </span>
          <span>{article.readMinutes} мин чтения</span>
        </div>
        <h1 className="font-display mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span>{article.date}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800/70">
            {article.category.toUpperCase()}
          </span>
        </div>

        <div className="mt-6 space-y-4 text-base text-slate-700 dark:text-slate-200">
          {article.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Похожие материалы
          </h2>
          <div className="grid gap-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/article/${item.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-200"
              >
                <p className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Article;
