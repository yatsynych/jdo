import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { deepOrange } from '@mui/material/colors'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { authSignIn } from '../../store/auth/authActions'

class SingIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.formSingIn
  }

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }

  submitHendler = event => {
    event.preventDefault();
    this.props.authSignIn({formSingIn: this.state})
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, mt: 3,  bgcolor: deepOrange[500] }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate onSubmit={this.submitHendler} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={this.changeHandler}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            color="warning"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/auth/singup">
                No have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    )
  }
}

const mapDispatchToProps = {
  authSignIn
}
  
const mapStateToProps = state => ({
  form: state.auth.formSingIn
})

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)