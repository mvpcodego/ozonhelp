import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { articles } from "../data/articles";

const THEME_KEY = "ozonhelp-theme";

const topLinkClass = ({ isActive }) =>
  `rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
    isActive
      ? "bg-black text-white shadow-sm dark:bg-white dark:text-slate-900"
      : "bg-white/70 text-slate-600 hover:bg-white dark:bg-slate-800/70 dark:text-slate-200 dark:hover:bg-slate-800"
  }`;

const bottomLinkClass = (isActive) =>
  `flex flex-col items-center gap-1 text-xs font-semibold transition ${
    isActive ? "text-black dark:text-white" : "text-slate-500 dark:text-slate-400"
  }`;

export default function RootLayout() {
  const [theme, setTheme] = useState("light");
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      setIsReady(true);
      return;
    }

    setTheme("light");
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme, isReady]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const getActiveBottomKey = () => {
    const path = location.pathname;
    if (path.startsWith("/cc3l")) return "cc3l";
    if (path.startsWith("/contacts")) return "contacts";
    if (path.startsWith("/topics")) return "topics";
    if (path.startsWith("/article/")) {
      const slug = path.replace("/article/", "");
      const article = articles.find((item) => item.slug === slug);
      if (!article) return "home";
      if (article.category === "cc3l") return "cc3l";
      if (article.category === "contacts") return "contacts";
      return "topics";
    }
    return "home";
  };

  const activeBottomKey = getActiveBottomKey();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-transparent bg-[#f7f8fb] dark:border-slate-800/80 dark:bg-slate-950/70 dark:backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="group">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="inline-flex size-8 items-center justify-center rounded-xl bg-black text-white transition group-hover:-translate-y-0.5 group-hover:shadow-md dark:bg-white dark:text-slate-900">
                T
              </span>
              <span className="text-slate-900 dark:text-white">TEYES Help</span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Короткие инструкции и подсказки для магнитол
            </p>
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden gap-2 sm:flex">
              <NavLink to="/" className={topLinkClass} end>
                Главная
              </NavLink>
              <NavLink to="/cc3l" className={topLinkClass}>
                CC3L
              </NavLink>
              <NavLink to="/contacts" className={topLinkClass}>
                Контакты
              </NavLink>
            </nav>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/80 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
              aria-label="Переключить тему"
            >
              {theme === "dark" ? (
                <svg
                  aria-hidden="true"
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3.75v2.5M12 17.75v2.5M4.22 6.22l1.77 1.77M17.99 17.99l1.77 1.77M3.75 12h2.5M17.75 12h2.5M4.22 17.78l1.77-1.77M17.99 6.01l1.77-1.77" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5a9 9 0 1 0 12 12z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 pb-28 pt-6">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white px-5 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <NavLink to="/" className={bottomLinkClass(activeBottomKey === "home")} end>
            <span
              className={`inline-flex size-9 items-center justify-center rounded-xl transition ${
                activeBottomKey === "home"
                  ? "bg-black text-white shadow-sm dark:bg-white dark:text-slate-900"
                  : "bg-transparent"
              }`}
            >
              <svg
                aria-hidden="true"
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 10.5 12 4l8 6.5v7a1 1 0 0 1-1 1h-4.5V13h-5v5.5H5a1 1 0 0 1-1-1z" />
              </svg>
            </span>
            Главная
          </NavLink>
          <NavLink to="/cc3l" className={bottomLinkClass(activeBottomKey === "cc3l")}>
            <span
              className={`inline-flex size-9 items-center justify-center rounded-xl transition ${
                activeBottomKey === "cc3l"
                  ? "bg-black text-white shadow-sm dark:bg-white dark:text-slate-900"
                  : "bg-transparent"
              }`}
            >
              <svg
                aria-hidden="true"
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="5" width="16" height="12" rx="2" />
                <circle cx="16.5" cy="9.5" r="1" />
                <path d="M7.5 12.5h9" />
              </svg>
            </span>
            CC3L
          </NavLink>
          <NavLink to="/topics" className={bottomLinkClass(activeBottomKey === "topics")}>
            <span
              className={`inline-flex size-9 items-center justify-center rounded-xl transition ${
                activeBottomKey === "topics"
                  ? "bg-black text-white shadow-sm dark:bg-white dark:text-slate-900"
                  : "bg-transparent"
              }`}
            >
              <svg
                aria-hidden="true"
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 7h14" />
                <path d="M5 12h14" />
                <path d="M5 17h14" />
                <circle cx="4" cy="7" r="0.5" />
                <circle cx="4" cy="12" r="0.5" />
                <circle cx="4" cy="17" r="0.5" />
              </svg>
            </span>
            Разделы
          </NavLink>
          <NavLink to="/contacts" className={bottomLinkClass(activeBottomKey === "contacts")}>
            <span
              className={`inline-flex size-9 items-center justify-center rounded-xl transition ${
                activeBottomKey === "contacts"
                  ? "bg-black text-white shadow-sm dark:bg-white dark:text-slate-900"
                  : "bg-transparent"
              }`}
            >
              <svg
                aria-hidden="true"
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            Контакты
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
