import * as yup from "yup";

export const addItemSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  img: yup.string().url("Invalid image URL").required("Image URL is required"),
});
