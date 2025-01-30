import { Box, Button, Card, CardContent, Typography, CircularProgress } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { styles } from './styles.js';
import { useNavigate } from "react-router-dom";
import { useProjectsStore } from "../../store/useProjectsStore.js"; // Импортируем Zustand store
import { fontStyles } from "../../styles/fontStyles.js";
import Rectangle from "../../assets/svg/Rectangle.svg";
import Message from "../../assets/svg/Message.svg";
import Bell from "../../assets/svg/Bell.svg";
import PassedProjects from "../PassedProjects";
import { useEffect } from "react";

const ProjectsList = () => {
  const navigate = useNavigate();
  const { projects, loading, loadProjects, error } = useProjectsStore();

  // Фильтруем активные и завершенные проекты
  const activeProjects = Array.isArray(projects) ? projects.filter((project) => !project.isPast) : [];
  const pastProjects = Array.isArray(projects) ? projects.filter((project) => project.isPast) : [];


  const handleReadyProject = (id) => navigate(`/projects/${id}`);

  const handleCreateProject = () => navigate("/createProject");


  useEffect(() => {
    loadProjects();
  }, [loadProjects]);


  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mainBox}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={[styles.title, fontStyles.font.fontLg]}>
            Active Projects
          </Typography>
          <Button onClick={handleCreateProject} sx={[styles.button, fontStyles.font.fontLg]}>
            Create project
          </Button>
        </Box>

        <Grid container spacing={4}>
          {activeProjects.length > 0 ? (
            activeProjects.map((project) => (
              <Grid sx={styles.projectGrid} xs={12} sm={6} md={4} key={project.id}>
                <Card sx={styles.card}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={[styles.cardTitle, fontStyles.font.fontLg]}
                      onClick={() => handleReadyProject(project.id)}
                    >
                      {project.name}
                    </Typography>
                    <Box variant="body2" sx={[styles.cardText, fontStyles.font.fontMd]}>
                      <Typography sx={styles.imageWithText}>
                        <img src={Rectangle} alt="Rectangle" />
                        {project.field}
                      </Typography>
                    </Box>
                    <Box variant="body2" sx={[styles.cardText, fontStyles.font.fontMd]}>
                      <Typography sx={styles.imageWithText}>
                        <img src={Rectangle} alt="Rectangle" />
                        {project.experience}
                      </Typography>
                    </Box>
                    <Box variant="body2" sx={[styles.cardText, fontStyles.font.fontMd]}>
                      <Typography sx={styles.imageWithText}>
                        <img src={Rectangle} alt="Rectangle" />
                        {project.deadline}
                      </Typography>
                    </Box>
                    <Box variant="body2" sx={[styles.cardText, fontStyles.font.fontMd]}>
                      <Typography sx={styles.imageWithText}>
                        <img src={Rectangle} alt="Rectangle" />
                        {project.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Box sx={styles.cardIcons}>
                    <img src={Message} alt="icon1" />
                    <img src={Bell} alt="icon2" />
                  </Box>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body2" sx={{ color: "#8C8C8C" }}>
              No projects available. Create a new one!
            </Typography>
          )}
        </Grid>


        <Typography variant="h5" sx={[styles.title, fontStyles.font.fontLg, { marginTop: "32px" }]}>
          Passed Projects
        </Typography>

        <Grid container spacing={4}>
          {pastProjects.length > 0 ? (
            pastProjects.map((project) => (
              <Grid sx={styles.projectGrid} xs={12} sm={6} md={4} key={project.id}>
                <PassedProjects project={project} />
              </Grid>
            ))
          ) : (
            <Typography variant="body2" sx={{ color: "#9D9D9D" }}>
              No passed projects available.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectsList;
