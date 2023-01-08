import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import HeaderOnly from "~/components/Layout/HeaderOnly";
import Search from "~/pages/Search";

// Public routes: để những path không cần login cũng xem đc
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: `/:nickname`,
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
];

// Private routes: để những path cần phải login mới xem đc

const privateRoutes = [];

export { publicRoutes, privateRoutes };
