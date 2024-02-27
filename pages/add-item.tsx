import { Header, ShouldRender } from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addItemSchema } from "@/form-schemas/addItem";
import { clsx } from "clsx";
import { ItemType } from "@/types/item";
import { postItem } from "@/services/items";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(addItemSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const addNewItem = async (data: Omit<ItemType, "id">) => {
    try {
      const result = await postItem(data);
      reset();
      console.log("New item added: ", result);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const onSubmit = async (data: Omit<ItemType, "id">) => {
    addNewItem(data);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center mt-10">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                className={clsx(
                  "block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none",
                  errors?.name && "border-red-500"
                )}
                {...register("name")}
              />
              <ShouldRender if={!!errors.name}>
                <p className="text-red-500 text-xs italic">
                  {errors?.name?.message}
                </p>
              </ShouldRender>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Price
              </label>
              <input
                className={clsx(
                  "block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none",
                  errors?.price && "border-red-500"
                )}
                type="number"
                {...register("price")}
              />
              <ShouldRender if={!!errors.price}>
                <p className="text-red-500 text-xs italic">
                  {errors?.price?.message}
                </p>
              </ShouldRender>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Image Url
              </label>
              <input
                className={clsx(
                  "block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none",
                  errors?.img && "border-red-500"
                )}
                {...register("img")}
              />
              <ShouldRender if={!!errors.img}>
                <p className="text-red-500 text-xs italic">
                  {errors?.img?.message}
                </p>
              </ShouldRender>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <button
                className="bg-slate-700 text-white rounded-md p-2 disabled:opacity-50"
                disabled={!isDirty || !isValid}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
