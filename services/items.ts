import { API_URL, ERROR_MSG } from "@/constants/globals";
import { ItemType } from "@/types/item";

export const getItems = async () => {
  const response = await fetch(`${API_URL}/items`);

  if (!response.ok) {
    throw new Error(ERROR_MSG);
  }

  return await response.json();
};

export const postItem = async (item: Omit<ItemType, "id">) => {
  const response = await fetch(`${API_URL}/items`, {
    method: "POST",
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error(ERROR_MSG);
  }

  return await response.json();
};
