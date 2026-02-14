import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
        <h1 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
          Разделы
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Сюда можно добавить фильтры по моделям, прошивкам и настройкам.
        </p>
      </div>

      <div className="grid gap-3">
        <Link
          to="/cc3l"
          className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-200"
        >
          TEYES CC3L
        </Link>
        <Link
          to="/"
          className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-200"
        >
          База знаний
        </Link>
      </div>
    </div>
  );
};

export default Topics;
