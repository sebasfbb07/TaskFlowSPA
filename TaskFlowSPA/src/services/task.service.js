import { apiUrlTasks } from "./api";

export async function createTask(task) {
    await fetch(apiUrlTasks, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
}

export async function deleteTask(id) {
    await fetch(`${apiUrlTasks}/${id}`, {
        method: "DELETE"
    });
}