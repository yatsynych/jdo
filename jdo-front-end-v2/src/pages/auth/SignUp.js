import React from 'react'
import { connect } from 'react-redux'
import { authSignUp } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

class SingUp extends React.Component {

  signUpHendler = event => {
    event.preventDefault();

    const form = {
      email: 'email_signUp',
      password: 'password_signUp',
      firstName: 'firstName_signUp',
      lastName: 'lastName_signUp'
    }

    this.props.authSignUp({form: form})
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Box component="form" noValidate onSubmit={this.signUpHendler} sx={{ mt: 3 }}>
          <Button
            type="submit"
            color="warning"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
        <Link to="/">
          SignIn Form
        </Link>
      </Container>
    )
  }
  
}

const mapDispatchToProps = {
    authSignUp
  }
  
  const mapStateToProps = state => ({
    form: state.auth.form_singup
  })

export default connect(mapStateToProps, mapDispatchToProps)(SingUp)