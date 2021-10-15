import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("A name must be provided")
    .min(2, "name must be at least 2 characters"),
  email: yup
    .string()
    .email("The email must be valid")
    .required("An email must be provided"),
  size: yup
    .string()
    .oneOf(
      ["Small", "Medium", "Large", "Extra Large"],
      "you must select a size"
    ),
});
export default formSchema;
