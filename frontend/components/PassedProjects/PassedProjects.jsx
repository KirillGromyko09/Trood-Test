import { Box, Card, CardContent, Typography } from "@mui/material";
import { styles } from "./styles.js";
import Bell from "../../assets/svg/Bell.svg";
import Message from "../../assets/svg/Message.svg";
import Person from "../../assets/svg/Person.svg";
import { fontStyles } from "../../styles/fontStyles.js";
import PropTypes from "prop-types";

const PassedProjects = ({ project }) => {
  return (
    <Card sx={styles.pastCard}>
      <CardContent>
        <Typography variant="h6" sx={[styles.pastCardTitle, fontStyles.font.fontLg]}>
          {project.name}
        </Typography>
      </CardContent>
      <Box sx={styles.cardPerson}>
        <img src={Person} alt="Person" />
        <Typography sx={fontStyles.font.fontMd}>
          Anna Lenhram
        </Typography>

      </Box>
      <Box sx={styles.cardIcons}>
        <img src={Message} alt="Message" />
        <img src={Bell} alt="Bell" />
      </Box>
    </Card>
  );
};
PassedProjects.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default PassedProjects;
