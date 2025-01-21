import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styles } from "./styles";
import { fontStyles } from "../../styles/fontStyles.js";
import  { useNavigate } from "react-router-dom";

const Sidebar = ({navItems}) => {
  const navigate = useNavigate();



  return (
    <Box sx={styles.sidebar}>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={styles.listItem}
              onClick={() => navigate(item.path)} // Навигация по пути
            >
              <ListItemText
                primary={item.label}
                sx={[styles.listItemText, fontStyles.font.fontMd]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
