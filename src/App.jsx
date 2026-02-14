
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import CC3L from "./pages/CC3L";
import Contacts from "./pages/Contacts";
import Article from "./pages/Article";
import Topics from "./pages/Topics";
import NotFound from "./pages/NotFound";
import "./App.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cc3l", element: <CC3L /> },
      { path: "contacts", element: <Contacts /> },
      { path: "topics", element: <Topics /> },
      { path: "article/:slug", element: <Article /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App
