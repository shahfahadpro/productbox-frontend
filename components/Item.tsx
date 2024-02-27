import { FC } from "react";
import Image from "next/image";
import { API_URL } from "@/constants/globals";
import { ItemType } from "@/types/item";
import { useItemsContext } from "@/contexts/ItemsContext";
import { ShouldRender } from "@/components";

interface Props {
  value: ItemType;
  isCheckout?: boolean;
}

export const Item: FC<Props> = ({ value: item, isCheckout }) => {
  const { addSelectedItem } = useItemsContext();
  const { id, name, price, img } = item;

  const addToCart = () => {
    addSelectedItem(item);
  };

  return (
    <>
      <div className="flex my-5 gap-5 bg-slate-700 p-5 w-[95%] mx-auto">
        <div>
          <Image
            src={`${API_URL}/${img}`}
            width={200}
            height={200}
            alt="product image"
          />
        </div>
        <div>
          <p className="text-white">id: {id}</p>
          <p className="text-white">name: {name}</p>
          <p className="text-white">price: {price}</p>
          <ShouldRender if={!isCheckout}>
            <div className="flex gap-5 mt-5">
              <button
                onClick={addToCart}
                className="bg-black text-white p-2 rounded-lg"
              >
                Add to cart
              </button>
              <button className="bg-black text-white round-sm p-2 rounded-lg">
                Edit
              </button>
              <button className="bg-black text-white round-sm p-2 rounded-lg">
                Delete
              </button>
            </div>
          </ShouldRender>
        </div>
      </div>
    </>
  );
};
