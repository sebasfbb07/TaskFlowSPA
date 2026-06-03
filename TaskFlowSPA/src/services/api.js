export const apiUrlUsers = "http://localhost:3000/users";
export const apiUrlTasks = "http://localhost:3000/tasks";
// Acá definimos las constantes para luego utilizarlas con fetch.

export async function consultarTasks() {
    const tasks = await fetch(apiUrlTasks);
    return tasks.json();
}