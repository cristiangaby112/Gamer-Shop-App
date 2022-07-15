import { AppBar, Box, Toolbar, Typography} from "@mui/material";
// import { Box } from './NavBarStyled';
import useStyles from './NavBarStyled';

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
    <AppBar>
      <Toolbar>
        <Typography variant="h6">navbar</Typography>
      </Toolbar>
    </AppBar>
    <Box className={classes.offset}></Box>
    </>
  )
}

export default NavBar