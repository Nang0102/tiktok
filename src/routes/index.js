import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import HeaderOnly from "~/components/Layout/HeaderOnly";
import Search from "~/pages/Search";

import routesConfig from "~/config/routesConfig";

// Public routes: để những path không cần login cũng xem đc
const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.profile,
    component: Profile,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.search,
    component: Search,
    layout: null,
  },
];

// Private routes: để những path cần phải login mới xem đc

const privateRoutes = [];

export { publicRoutes, privateRoutes };
