import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { styles } from "./styles";
import { fontStyles } from "../../styles/fontStyles.js";
import  { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({navItems}) => {
  const navigate = useNavigate();



  return (
    <Box sx={styles.sidebar}>
      <List>
        {navItems.map((item, index) => {

          const isActive = location.pathname === item.path;

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  ...styles.listItem,
                  backgroundColor: isActive ? "#C2C5CB" : "transparent",
                }}
                onClick={() => navigate(item.path)}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    ...styles.listItemText,
                    ...fontStyles.font.fontMd,
                    color: isActive ? "#ffffff" : "inherit",
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Typography sx={[styles.typography, fontStyles.font.fontMd]}>
        Log out
      </Typography>
    </Box>
  );
};
Sidebar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
