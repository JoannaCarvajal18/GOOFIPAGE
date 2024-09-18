// import
import Dashboard from "views/Dashboard/Dashboard";
import Inicio from "views/Dashboard/Inicio";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",

    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",

    state: "pageCollapse",
    views: [
      {
        path: "/inicio",
        name: "Inicio",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Inicio,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
