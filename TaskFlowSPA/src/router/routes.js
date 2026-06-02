import { renderLogin } from "../views/auth/login";
import { renderRegister } from "../views/auth/register";
import { renderHome } from "../views/home";
import { renderDashboard } from "../views/users/dashboard";
import { renderTasks, setupTasks } from "../views/tasks/tasks";
import { renderTasksForm, setupTasksForm } from "../views/tasks/taskForm";
import { renderProfile, setupProfile } from "../views/users/profile";
import { renderAdmin, setupAdmin } from "../views/users/admin";
import { setupRegister } from "../views/auth/register";
import { setupDashboard } from "../views/users/dashboard";
import {setupLogin} from "../views/auth/login";



const routes = {
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
    "/tasks/new": {
        render: renderTasksForm,
        setup: setupTasksForm,
        isAuthorized: true,
    },
    "/tasks/edit": {
        render: renderTasksForm,
        setup: setupTasksForm,
        isAuthorized: true,
    },
    "/profile": {
        render: renderProfile,
        setup: setupProfile,
        isAuthorized: true,
    },  
    "/admin": {
    render: renderAdmin,
    setup: setupAdmin,
    isAuthorized: true,
    requiredRole: "ADMIN"
  }
};