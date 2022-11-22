import useStyles from "./HomeStyles";
import { Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import CardCarousel from "../../components/Carousel/Carousel";

import "react-multi-carousel/lib/styles.css";



const Home = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation("translation");

  return (
    <Box component="div" className={classes.root} color="primary">
      <CardCarousel/>
    </Box>
  );
};

export default Home;
