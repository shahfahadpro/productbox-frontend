import { ChangeEvent, useEffect, useRef, useState } from "react";
import { deleteItem, getItems } from "@/services/items";
import { Item } from "@/components";
import { ItemType } from "@/types/item";

export const ViewItems = () => {
  const [allItems, setAllItems] = useState<ItemType[]>([]);
  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchAllItems = async () => {
    try {
      const items = await getItems();

      setAllItems(items);
      setFilteredItems(items);

      if (inputRef.current) {
        inputRef!.current.value = "";
      }
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

  const onFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!value) {
      setFilteredItems([...allItems]);
      return;
    }

    const newFilteredItems = allItems.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredItems(newFilteredItems);
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div className="flex flex-col items-center my-10">
      <div className="flex gap-2 items-center">
        <label>Filter: </label>
        <input
          className="block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none"
          type="text"
          onChange={onFilter}
          ref={inputRef}
        />
      </div>
      {filteredItems.map((item) => {
        return (
          <Item key={item.id} value={item} onDeleteHandle={onDeleteHandle} />
        );
      })}
    </div>
  );
};
