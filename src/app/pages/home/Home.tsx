import useStyles from "./HomeStyles";
import { Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation("translation");

  return (
    <Box component="div" className={classes.root}>
      <Typography variant="h1" color="primary">
        {t("translation.home")}
      </Typography>
      <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>
      <Button onClick={() => i18n.changeLanguage("es")}>ES</Button>
    </Box>
  );
};

export default Home;
