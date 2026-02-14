const Contacts = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
        <h1 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
          Контакты
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Быстро отвечаем по вопросам TEYES, активации и настройке.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Telegram
          </p>
          <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
            @ozonhelp_support
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Напишите модель магнитолы и версию прошивки.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Email
          </p>
          <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
            support@ozonhelp.ru
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Ответим в течение 24 часов в рабочие дни.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
