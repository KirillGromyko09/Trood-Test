
import { Formik, Form, Field } from "formik";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useProjectsStore } from "../../store/useProjectsStore.js";
import { styles } from "./styles";
import { fontStyles } from "../../styles/fontStyles.js";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../../utils/validationSchemas/validationSchema.js";
import { directions } from "../../utils/validationSchemas/directions.js";

const CreateProject = () => {
  const navigate = useNavigate();
  const { addProject } = useProjectsStore();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const newProject = {
        ...values,
        deadlineTimestamp: new Date(values.deadline).getTime(),
      };

      await addProject(newProject);

      resetForm();
      navigate("/projects");
    } catch (error) {
      console.error("Error sending project data:", error);
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mainBox}>
        <Typography variant="h5" sx={[styles.title, fontStyles.font.fontLg]}>
          Creating Project
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
          onSubmit={handleSubmit}
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
                  {touched.field && errors.field && (
                    <Typography sx={{ color: "red", fontSize: "12px" }}>
                      {errors.field}
                    </Typography>
                  )}
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
                Create Project
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateProject;
