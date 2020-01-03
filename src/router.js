import Home from "./components/Home";
import User from "./components/user/User";
import Result from "./components/user/Result"
import Counter from "./components/user/Counter"
import Redirect from './components/Redirect.vue';
export const routes = [
  { path: "/", name: "homepage", component: Home },
  { path: "/user", name: "user", component: User },
  { path: "/user/Result", name:"result",component:Result},
  { path: "/user/Counter", name:"counter",component:Counter},
  { path: '/redirect', component: Redirect, name: 'redirect' },
];
export default routes;
