import AddPage from "../pages/AddPage";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";

const routes = [
    {
        path: "/home",
        label: "Home",
        component: HomePage
    },
    {
        path: "/add",
        label: "Add User",
        component: AddPage
    },
    {
        path: "/edit/:id",
        component: EditPage
    }
]

export default routes;