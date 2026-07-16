export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export async function postJson(path, body) {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured yet.");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with ${response.status}`);
  }

  return response.json();
}
