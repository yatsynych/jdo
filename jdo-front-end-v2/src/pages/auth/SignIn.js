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
import { signInUser } from '../../store/auth/authActions'
import { Alert } from '../../componets/Alert'

class SingIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formSingIn: this.props.formSingIn,
      formAlert: this.props.formAlert,
      showAlert: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.formAlert.text != this.props.formAlert.text && this.props.formAlert.text) {
      this.setState({showAlert: true})
    }
  }

  changeHandler = event => {
    this.setState({
      formSingIn: {
        ...this.state.formSingIn,
        [event.target.name]: event.target.value
      }
    })
  }

  submitHendler = event => {
    event.preventDefault()
    this.props.signInUser({formSingIn: this.state.formSingIn})
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
                autoFocus
                required
                fullWidth
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                label="Email Address"
                autoComplete="email"
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                label="Password"
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
          { this.state.showAlert &&
            <Alert
              text={this.props.formAlert.text}
              severity={this.props.formAlert.severity}
              variant={this.props.formAlert.variant} /> }
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/auth/singup" >
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
  signInUser
}
  
const mapStateToProps = state => ({
  formSingIn: state.auth.formSingIn,
  formAlert: state.auth.formAlert
})

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)