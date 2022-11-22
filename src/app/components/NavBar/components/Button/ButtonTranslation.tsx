import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";

const ButtonTranslation = ({ idioma }: { idioma: string }) => {
  const { i18n } = useTranslation("translation");
  const TranslationES = () => i18n.changeLanguage("es");
  const TranslationEN = () => i18n.changeLanguage("en");
  const Translation = () => {
    idioma === "ES" ? TranslationES() : TranslationEN();
  };

  return (
    <Button
      variant="contained"
      size="small"
      style={{ margin: "5px" }}
      color= "secondary"
      startIcon={<TranslateIcon />}
      onClick={Translation}
    >
      {idioma}
    </Button>
  );
};

export default ButtonTranslation;
