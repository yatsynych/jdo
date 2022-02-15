import React from 'react'
import { connect } from 'react-redux'
import { authSignIn } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

class SingIn extends React.Component {

  signInHendler = event => {

    event.preventDefault();

    const form = {
      email: 'email_signIn',
      password: 'password_signIn'
    }

    this.props.authSignIn({form: form})
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Box component="form" noValidate onSubmit={this.signInHendler} sx={{ mt: 3 }}>
          <Button
            type="submit"
            color="warning"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={this.signInHendler}
          >
            Sign In
          </Button>
        </Box>
        <Link to="/auth/singup">
          SignUp Form
        </Link>
      </Container>
    )
  }
}

const mapDispatchToProps = {
    authSignIn
  }
  
  const mapStateToProps = state => ({
    form: state.auth.form_singin
  })

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)