import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { deepOrange } from '@mui/material/colors'
import PersonIcon from '@mui/icons-material/Person'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { authSignUp } from '../../store/auth/authActions'

class SingUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.formSingUp
  }

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }

  submitHendler = event => {
    event.preventDefault();
    this.props.authSignUp({formSingUp: this.state})
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
          <Avatar sx={{ m: 1, mt : 3, bgcolor: deepOrange[500] }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={this.submitHendler} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={this.state.firstName}
                  label="First Name"
                  autoComplete="given-name"
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  label="Last Name"
                  autoComplete="family-name"
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
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
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/">
                  Already have an account? Sign In
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
    authSignUp
  }
  
  const mapStateToProps = state => ({
    formSingUp: state.auth.formSingUp
  })

export default connect(mapStateToProps, mapDispatchToProps)(SingUp)