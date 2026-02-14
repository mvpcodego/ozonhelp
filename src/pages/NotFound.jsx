import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
      <h1 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
        404
      </h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Страница не найдена.
      </p>
      <Link
        className="mt-5 inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
        to="/"
      >
        На главную
      </Link>
    </div>
  );
};

export default NotFound;
