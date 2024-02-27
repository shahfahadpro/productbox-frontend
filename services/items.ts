import { API_URL, ERROR_MSG } from "@/constants/globals";

export const getItems = async () => {
  const response = await fetch(`${API_URL}/items`);

  if (!response.ok) {
    throw new Error(ERROR_MSG);
  }

  return await response.json();
};
