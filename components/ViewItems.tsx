import { useEffect, useState } from "react";
import { getItems } from "@/services/items";
import { Item } from "@/components";
import { ItemType } from "@/types/item";

export const ViewItems = () => {
  const [allItems, setAllItems] = useState<ItemType[]>([]);

  const fetchAllItems = async () => {
    const items = await getItems();
    setAllItems(items);
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div className="flex flex-col items-center my-10">
      {allItems.map((item) => {
        return <Item key={item.id} value={item} />;
      })}
    </div>
  );
};
