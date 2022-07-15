import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: { mixins: { toolbar: any; }; }) => ({
  offset: theme.mixins.toolbar,
}))

export default useStyles;

