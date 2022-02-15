import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {appRoutes} from './routes'
import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { ReactReduxContext } from 'react-redux'

const theme = createTheme()

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(2),
      marginTop: 'auto',
      backgroundColor: theme.palette.grey[200],
    },
  });

//import { useSelector } from 'react'
//const { login } = useSelector((state) => state.auth)
//console.log(login)

function App() {

    const { store } = React.useContext(ReactReduxContext)
    const routes = appRoutes(store.getState().auth.login)

    const classes = useStyles(theme);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Box className="logo" component="div" />
                <BrowserRouter>
                    {routes}
                </BrowserRouter>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body2" align="center" color="textSecondary">
                        {'Copyright © '}
                        <Link color="inherit" href="https://github.com/yatsynych/jdo">
                        jDO
                        </Link>{' '}
                        {new Date().getFullYear()}
                    </Typography>
                </Container>
            </footer>
        </div>
    )
}

export default App