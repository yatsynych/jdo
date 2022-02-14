import React from 'react'
import { connect } from 'react-redux'
import { authSignUp } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

class SingUp extends React.Component {

  signUpHendler = event => {

    const form = {
      email: 'email',
      password: 'password',
      firstName: 'firstName',
      lastName: 'lastName'
    }

    this.props.authSignUp({form_singup: form})
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Button
                type="button"
                color="warning"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={this.signUpHendler}
              >
                Sign Up
              </Button>
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