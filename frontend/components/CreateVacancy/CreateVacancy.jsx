import { Formik, Form, Field } from "formik";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { styles } from "./styles";
import { fontStyles } from "../../styles/fontStyles.js";
import { useNavigate, useParams } from "react-router-dom";
import { useVacanciesStore } from "../../store/useVacanciesStore.js";
import { validationSchema } from "../../utils/validationSchemas/validationSchema.js";
import { directions } from "../../utils/validationSchemas/directions.js";

const CreateVacancy = () => {
  const navigate = useNavigate();
  const { addVacancy } = useVacanciesStore();
  const { id } = useParams();
  if (!id) {
    console.error("ID not found, redirect to /projects");
    navigate("/projects");
    return null;
  }

  const handleVacancy = (id) => navigate(`/projects/${id}/createdVacancy`);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mainBox}>
        <Typography variant="h5" sx={[styles.title, fontStyles.font.fontLg]}>
          Create Vacancy
        </Typography>
        <Formik
          initialValues={{
            name: "",
            field: "",
            experience: "",
            deadline: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            const newVacancy = {
              ...values,
              id,
              deadlineTimestamp: new Date(values.deadline).getTime(),
            };
            await addVacancy(newVacancy);
            resetForm();
            handleVacancy(id);
          }}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form style={styles.form}>
              <Box sx={styles.fieldsRow}>
                <Box sx={styles.boxText}>
                  <Typography sx={[fontStyles.font.fontMd, { fontSize: "18px" }]}>Name</Typography>
                  <Field
                    as={TextField}
                    fullWidth
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    sx={styles.textField}
                  />
                </Box>
                <Box sx={styles.boxText}>
                  <Typography sx={[fontStyles.font.fontMd, { fontSize: "18px" }]}>Field</Typography>
                  <Field
                    as={Select}
                    fullWidth
                    id="field"
                    name="field"
                    value={values.field}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.field && Boolean(errors.field)}
                    sx={styles.textField}
                  >
                    {directions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Field>
                </Box>
              </Box>

              <Box sx={styles.fieldsRow}>
                <Box sx={styles.boxText}>
                  <Typography sx={[fontStyles.font.fontMd, { fontSize: "18px" }]}>Experience</Typography>
                  <Field
                    as={TextField}
                    fullWidth
                    id="experience"
                    name="experience"
                    value={values.experience}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.experience && Boolean(errors.experience)}
                    helperText={touched.experience && errors.experience}
                    sx={styles.textField}
                  />
                </Box>
                <Box sx={styles.boxText}>
                  <Typography sx={[fontStyles.font.fontMd, { fontSize: "18px" }]}>Deadline</Typography>
                  <Field
                    as={TextField}
                    fullWidth
                    name="deadline"
                    type="date"
                    value={values.deadline}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.deadline && Boolean(errors.deadline)}
                    helperText={touched.deadline && errors.deadline}
                    sx={styles.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Box>

              <Box sx={styles.boxTextFull}>
                <Typography sx={[fontStyles.font.fontMd, { fontSize: "18px" }]}>Description</Typography>
                <Field
                  as={TextField}
                  fullWidth
                  id="description"
                  name="description"
                  multiline
                  rows={4}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
              </Box>

              <Button variant="contained" type="submit" sx={[styles.button, fontStyles.font.fontLg]}>
                Create Vacancy
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateVacancy;
