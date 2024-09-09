import { useRoutes } from "react-router-dom/dist";
import Landing from "./views/Landing/Landing";
import RootLayout from "./layout/RootLayout/RootLayout";
import Team from "./views/Team/Team";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Landing />},
        { path: "/team", element: <Team />},
      ],
    },
  ]);
  return element;
}
