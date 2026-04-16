import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import RosaryPage from "../modules/rosary/pages/RosaryPage";
import LiturgyPage from "../modules/liturgy/pages/LiturgyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    handle: { name: "Vida Católica" },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "rosary",
        handle: { name: "Terço" },
        element: <RosaryPage />,
      },
      {
        index: true,
        path: "liturgy",
        handle: { name: "Liturgia Diária" },
        element: <LiturgyPage />,
      },
    ],
  },
]);
