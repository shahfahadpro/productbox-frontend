import { useItemsContext } from "@/contexts/ItemsContext";
import { useRouter } from "next/router";
import { BsMinecart } from "react-icons/bs";

export const Header = () => {
  const { selectedItems } = useItemsContext();
  const router = useRouter();
  const clickHandle = () => {
    router.push("/checkout");
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-between items-center bg-slate-700 text-white h-10">
      <h3 onClick={goHome} className="p-5 hover:cursor-pointer">
        RandoStore
      </h3>
      <div
        className="p-5 w-20 flex justify-between items-center hover:cursor-pointer"
        onClick={clickHandle}
      >
        <p>{selectedItems.length}</p>
        <BsMinecart />
      </div>
    </div>
  );
};
