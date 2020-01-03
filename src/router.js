import Home from "./components/Home";
import User from "./components/user/User";
import Result from "./components/user/Result"
import Counter from "./components/user/Counter"
export const routes = [
  { path: "/", name: "homepage", component: Home },
  { path: "/user", name: "user", component: User },
  { path: "/user", name:"result",component:Result},
  { path: "/user", name:"counter",component:Counter}
];
export default routes;
