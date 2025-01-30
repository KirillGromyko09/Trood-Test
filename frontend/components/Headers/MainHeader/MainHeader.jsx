import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { styles } from "./styles.js";
import { fontStyles } from "../../../styles/fontStyles.js";
import Message from "../../../assets/svg/Message.svg";
import Bell from "../../../assets/svg/Bell.svg";
import Ellipse from "../../../assets/svg/Ellipse.svg";
const MainHeader = () =>{

  return (
    <Box sx={styles.container}>
      <Box>
        <AppBar sx={styles.appBar}>
          <Toolbar sx={styles.toolbar}>
            <Typography sx={[fontStyles.font.fontXl , styles.typography]}>
              Trood Community
            </Typography>
            <Box sx={styles.box}>
              <img src={Message} alt="MessageIcon" />
              <img src={Bell} alt="BellIcon" />
              <img src={Ellipse} alt="EllipseIcon" />
              <Typography sx={[styles.userName, fontStyles.font.fontMd]}>
                Alex Smith
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  )
}
export default MainHeader;
