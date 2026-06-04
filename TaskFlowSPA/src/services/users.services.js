import { apiUrlUsers } from "./api";
//importamos datos de la API


export async function getUsers() {
    const response = await fetch(apiUrlUsers);
    if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
    }
    return await response.json();
}

export async function createUser(user) {
     await fetch(apiUrlUsers, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
}
export async function deleteUser(id) {
  await fetch(`${apiUrlUsers}/${id}`, {
    method: "DELETE"
  });
}
export async function updateUser(id, user) {
  await fetch(`${apiUrlUsers}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
}