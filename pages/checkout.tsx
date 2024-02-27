import { Header, Item, ShouldRender } from "@/components";
import { useItemsContext } from "@/contexts/ItemsContext";

const Checkout = () => {
  const { selectedItems } = useItemsContext();

  return (
    <>
      <Header />
      <div className="h-screen flex flex-col items-center">
        <ShouldRender if={!selectedItems.length}>
          <p className="mt-10 text-xl">Sorry, no items selected!</p>
        </ShouldRender>
        <ShouldRender if={!!selectedItems.length}>
          {selectedItems.map((item) => {
            return <Item key={item.id} value={item} isCheckout />;
          })}
        </ShouldRender>
      </div>
    </>
  );
};

export default Checkout;
