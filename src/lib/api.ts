export async function fetchUsers() {
  const res = await fetch("http://localhost:4020/users"); // FULL URL
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
