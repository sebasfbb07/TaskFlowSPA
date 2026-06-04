export const apiUrlUsers = "http://localhost:3000/users";
export const apiUrlTasks = "http://localhost:3000/tasks";

export async function consultarTasks() {
    const tasks = await fetch(apiUrlTasks);
    return tasks.json();
}