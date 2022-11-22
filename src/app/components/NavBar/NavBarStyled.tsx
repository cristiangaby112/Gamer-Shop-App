import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: { mixins: { toolbar: {}; }; }) => ({
  offset: theme.mixins.toolbar,
  containerButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Appbar: {

  },
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export default useStyles;

