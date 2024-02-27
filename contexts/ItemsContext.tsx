import { ItemType, ItemsContextType } from "@/types/item";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ItemsContext = createContext<ItemsContextType>({
  selectedItems: [],
  addSelectedItem: () => null,
});

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItemContext must be used within an ItemProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const ItemsProvider: React.FC<Props> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<ItemType[]>([]);

  const addSelectedItem = (item: ItemType) => {
    const updatedItems = [...selectedItems, item];
    setSelectedItems(updatedItems);
    localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("selectedItems");
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <ItemsContext.Provider value={{ selectedItems, addSelectedItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
