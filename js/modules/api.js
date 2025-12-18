export async function getData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

