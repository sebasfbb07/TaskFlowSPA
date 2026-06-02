export async function crearUsuario(usuario){
    const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    if (!response.ok) {
        throw new Error("Error al crear el usuario");
    }
    return await response.json();
}

export function obtenerUsuarios(){
    return fetch("http://localhost:8080/api/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los usuarios");
            }
            return response.json();
        });
}  

export function obtenerUsuarioPorEmail(email){
    return fetch(`http://localhost:8080/api/users/email/${email}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener el usuario por email");
            }
            return response.json();
        });
}