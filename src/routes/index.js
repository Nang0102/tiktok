import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import HeaderOnly from "~/layouts/HeaderOnly";
import Search from "~/pages/Search";

import config from "~/config/index";

// Public routes: để những path không cần login cũng xem đc
const publicRoutes = [
  {
    path: config.routesConfig.home,
    component: Home,
  },
  {
    path: config.routesConfig.following,
    component: Following,
  },
  {
    path: config.routesConfig.profile,
    component: Profile,
  },
  {
    path: config.routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routesConfig.search,
    component: Search,
    layout: null,
  },
];

// Private routes: để những path cần phải login mới xem đc

const privateRoutes = [];

export { publicRoutes, privateRoutes };
