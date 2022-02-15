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
import { authSignUp } from '../../redux/actions'

class SingUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.form_singup
  }

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }

  submitHendler = event => {
    event.preventDefault();
    this.props.authSignUp({form_singup: this.state})
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
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={this.changeHandler}
                />
              </Grid>
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
    form_singup: state.auth.form_singup
  })

export default connect(mapStateToProps, mapDispatchToProps)(SingUp)