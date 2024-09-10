import { useRoutes } from "react-router-dom/dist";
import Landing from "./views/Landing/Landing";
import RootLayout from "./layout/RootLayout/RootLayout";
import Team from "./views/Team/Team";
import Careers from "./views/Careers/Careers";
import JobApplication from "./views/Careers/JobApplication";
import ContactUs from "./views/ContactUs/ContactUs";
import Services from "./views/Services/Services";
import Company from "./views/Company";
import Portfolio from "./views/Portfolio";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/team", element: <Team /> },
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/job-application",
          element: <JobApplication />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        { path: "/company", element: <Company /> },
        { path: "/portfolio", element: <Portfolio /> },
      ],
    },
  ]);
  return element;
}
