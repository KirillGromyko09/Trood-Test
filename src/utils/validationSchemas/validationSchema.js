import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  field: Yup.string().required("Field is required"),
  experience: Yup.string().required("Experience is required"),
  deadline: Yup.date()
    .nullable()
    .required("Deadline is required")
    .typeError("Invalid date"),
  description: Yup.string().required("Description is required"),
});
