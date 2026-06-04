import { apiUrlUsers } from "./api";

export async function login(email, password) {

  const response =
    await fetch(apiUrlUsers);

  const users =
    await response.json();

  const user = users.find(
    user =>
      user.email === email &&
      user.password === password
  );

  return user;
}
