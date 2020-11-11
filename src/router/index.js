import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/category",
    name: "category",
    component: Category
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  }
]


export default new VueRouter({
  routes,
  mode: 'history'
})