import { useEffect, useState } from "react";
import { deleteItem, getItems } from "@/services/items";
import { Item } from "@/components";
import { ItemType } from "@/types/item";

export const ViewItems = () => {
  const [allItems, setAllItems] = useState<ItemType[]>([]);

  const fetchAllItems = async () => {
    try {
      const items = await getItems();

      setAllItems(items);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const onDeleteHandle = async (id: string) => {
    try {
      await deleteItem(id);
      fetchAllItems();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div className="flex flex-col items-center my-10">
      {allItems.map((item) => {
        return (
          <Item key={item.id} value={item} onDeleteHandle={onDeleteHandle} />
        );
      })}
    </div>
  );
};
