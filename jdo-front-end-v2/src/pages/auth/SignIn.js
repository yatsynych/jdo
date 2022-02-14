import React from 'react'
import { connect } from 'react-redux'
import { authSignIn } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

class SingIn extends React.Component {

  signInHendler = event => {

    const form = {
      email: 'email',
      password: 'password'
    }

    this.props.authSignIn(form)
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
                onClick={this.signInHendler}
              >
                Sign In
              </Button>
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