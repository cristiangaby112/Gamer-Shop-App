import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import useStyles from "./NavBarStyled";
import ButtonTranslation from "./components/Button/ButtonTranslation";
import Search from "./components/Search/Search";
import GamerShopLogo from "../../../assets/GamerShopLogo.png";
import LogoGamer from "./components/LogoGamer/LogoGamer";

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.Appbar}>
        <Toolbar className={classes.Toolbar}>
          {/* <LogoGamer img={GamerShopLogo}/> */}
          <Typography variant="h6">navbar</Typography>
          <Search/>
          <Box className={classes.containerButton}>
            <ButtonTranslation idioma="EN" />
            <ButtonTranslation idioma="ES" />
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={classes.offset}></Box>
    </>
  );
};

export default NavBar;
