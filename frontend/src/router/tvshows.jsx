import { lazy } from "react";

const TvShowsPage = lazy(() => import("../views/MainPages/TvShowsPage"));

export const TvShowsRouter = [
  {
    path: "/tv-shows",
    element: <TvShowsPage />,
  },
];