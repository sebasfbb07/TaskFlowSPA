import { renderLogin , setupLogin } from "../views/auth/login"
import { renderNotFound } from "../views/auth/not-found"
import { renderRegister , setupRegister } from "../views/auth/register"
import { renderHome } from "../views/home"
import { renderTasks , setupTasks} from "../views/tasks/tasks"
import { renderAdmin , setupAdmin} from "../views/users/admin"
import { renderDashboard , setupDashboard} from "../views/users/dashboard"
import { renderProfile , setupProfile} from "../views/users/profile"






export const routes = {
    "/":{
        render: renderHome,
    },
    "/login": {
        render: renderLogin,
        setup: setupLogin,
        isAuthorized: false
    },
    "/register": {
        render: renderRegister,
        setup: setupRegister,
        isAuthorized: false
    },
    "/dashboard": {
        render: renderDashboard,
        setup: setupDashboard,
        isAuthorized: true
    },
    "/tasks": {
        render: renderTasks,
        setup: setupTasks,
        isAuthorized: true,
    },

    //"/tasks/new": {
    //    render: renderTasks,
    //    setup: setupTasksForm,
    //    isAuthorized: true,
    //},
    //"/tasks/edit": {
    //    render: renderTasks,
    //    setup: setupTasksForm,
    //    isAuthorized: true,
    //},

    "/profile": {
        render: renderProfile,
        setup: setupProfile,
        isAuthorized: true,
    },  
    "/admin": {
    render: renderAdmin,
    setup: setupAdmin,
    isAuthorized: true,
    requiredRole: "ADMIN",
    },
    "/not-found":{
        render: renderNotFound,
        isAuthorized:false
    }
}