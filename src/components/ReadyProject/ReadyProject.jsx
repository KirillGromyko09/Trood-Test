import { Formik, Form, Field } from "formik";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useProjectsStore } from "../../store/useProjectsStore.js";
import { styles } from "./styles";
import { fontStyles } from "../../styles/fontStyles.js";
import { useNavigate, useParams } from "react-router-dom";
import { validationSchema } from "../../utils/validationSchemas/validationSchema.js";
import { directions } from "../../utils/validationSchemas/directions.js";




const ReadyProject = () => {
  const { id } = useParams();
  const { projects , removeProject } = useProjectsStore();
  const navigate = useNavigate();

  const project = projects.find((project) => project.id === id);


  const handleCreateVacancy = () => {
    navigate("/createVacancy");
  };

  const handleRemoveProject = () => {
    removeProject(id);
    navigate('/projects')
  }

  if (!project) {
    return (
      <Box sx={styles.container}>
        <Typography variant="h5" sx={[styles.title, fontStyles.font.fontLg]}>
          Project not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mainBox}>
        <Box sx={{display: 'flex' , justifyContent: 'space-between'}}>
          <Typography variant="h5" sx={[styles.title, fontStyles.font.fontLg]}>{project.name}</Typography>
          <Button
            variant="contained"
            sx={[styles.button , fontStyles.font.fontLg]}
            onClick={handleRemoveProject}
          >
            Delete project
          </Button>
        </Box>

        <Formik
          initialValues={{
            name: project.name || "",
            field: project.field || "",
            experience: project.experience || "",
            deadline: project.deadline || "",
            description: project.description || "",
          }}
          validationSchema={validationSchema}
         onSubmit={handleCreateVacancy}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form style={styles.form}>
              <Box sx={styles.fieldsRow}>
                <Box sx={styles.boxText}>
                  <Typography sx={[fontStyles.font.fontMd, {fontSize:'18px'}]}>Field</Typography>
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
                <Box sx={styles.boxText}>
                  {touched.field && errors.field && (
                    <Typography sx={{ color: "red", fontSize: "12px" }}>
                      {errors.field}
                    </Typography>
                  )}
                  <Typography sx={[fontStyles.font.fontMd, {fontSize:'18px'}]}>Experience</Typography>
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
                  <Typography sx={[fontStyles.font.fontMd, {fontSize:'18px'}]}>Deadline</Typography>
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
                <Typography sx={[fontStyles.font.fontMd, {fontSize:'18px'}]}>Description</Typography>
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
              <Button
                variant="contained"
                type="submit"
                sx={[styles.button , fontStyles.font.fontLg , {marginTop: "20px"}]}
              >
                Add vacancy
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>

  );
};

export default ReadyProject;
