import { Header, Item } from "@/components";
import { useItemsContext } from "@/contexts/ItemsContext";

const Checkout = () => {
  const { selectedItems } = useItemsContext();

  return (
    <>
      <Header />
      {selectedItems.map((item) => {
        return <Item key={item.id} value={item} isCheckout />;
      })}
    </>
  );
};

export default Checkout;
