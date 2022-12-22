import usersData from "../json/users.json";

export const login = (email, password) => {
  const user = usersData.users.find((u) => u.email === email);
  return user?.password === password ? user : null;
};
