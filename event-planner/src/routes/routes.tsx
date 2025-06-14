import { Home } from "src/home";
import { ConnectPage, ErrorPage, GeneratePage, ResultsPage } from "src/pages";

export enum Paths {
  HOME = "/",
  RESULTS = "/results",
  CONNECT = "/connect"
}

export const routes = [
  {
    path: Paths.HOME,
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <GeneratePage />,
      },
      {
        path: Paths.RESULTS,
        element: <ResultsPage />,
      },
      {
        path: Paths.CONNECT,
        element: <ConnectPage />,
      },
    ],
  },
];
