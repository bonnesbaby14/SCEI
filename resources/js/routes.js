import Home from "./components/Home.vue";
import Login from "./components/Login.vue"
export const routes=[
    {
        name:"home",
        path:"/",
        component:Home
    },
    {
        name:"login",
        path:"/login",
        component:Login,
    },
    {
        name:"dashboard",
        path:"/dashboard",
        component:Login

    }
];